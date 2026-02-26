import { startOfDecade } from "./index.js";

describe("startOfDecade", () => {
  it("returns start of decade for PlainDate", () => {
    const date = Temporal.PlainDate.from("2024-06-15");
    const result = startOfDecade(date);
    expect(result.toString()).toBe("2020-01-01");
  });

  it("returns start of decade for PlainDateTime with midnight", () => {
    const dt = Temporal.PlainDateTime.from("2024-06-15T14:30:00");
    const result = startOfDecade(dt);
    expect(result.toString()).toBe("2020-01-01T00:00:00");
  });

  it("returns start of decade for ZonedDateTime", () => {
    const zdt = Temporal.ZonedDateTime.from(
      "2024-06-15T14:30:00[America/New_York]",
    );
    const result = startOfDecade(zdt);
    expect(result.year).toBe(2020);
    expect(result.month).toBe(1);
    expect(result.day).toBe(1);
    expect(result.hour).toBe(0);
  });

  it("handles year at decade boundary", () => {
    const date = Temporal.PlainDate.from("2020-06-15");
    const result = startOfDecade(date);
    expect(result.toString()).toBe("2020-01-01");
  });

  it("handles year 2019 (end of previous decade)", () => {
    const date = Temporal.PlainDate.from("2019-12-31");
    const result = startOfDecade(date);
    expect(result.toString()).toBe("2010-01-01");
  });
});
