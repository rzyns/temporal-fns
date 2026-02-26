import { startOfQuarter } from "./index.js";

describe("startOfQuarter", () => {
  it("returns start of Q1 for January PlainDate", () => {
    const date = Temporal.PlainDate.from("2024-02-15");
    const result = startOfQuarter(date);
    expect(result.toString()).toBe("2024-01-01");
  });

  it("returns start of Q2 for April PlainDate", () => {
    const date = Temporal.PlainDate.from("2024-05-20");
    const result = startOfQuarter(date);
    expect(result.toString()).toBe("2024-04-01");
  });

  it("returns start of Q3 for August PlainDateTime with midnight", () => {
    const dt = Temporal.PlainDateTime.from("2024-08-15T14:30:00");
    const result = startOfQuarter(dt);
    expect(result.toString()).toBe("2024-07-01T00:00:00");
  });

  it("returns start of Q4 for December ZonedDateTime", () => {
    const zdt = Temporal.ZonedDateTime.from(
      "2024-12-25T10:00:00[America/New_York]",
    );
    const result = startOfQuarter(zdt);
    expect(result.month).toBe(10);
    expect(result.day).toBe(1);
    expect(result.hour).toBe(0);
  });

  it("handles already at start of quarter", () => {
    const date = Temporal.PlainDate.from("2024-01-01");
    const result = startOfQuarter(date);
    expect(result.toString()).toBe("2024-01-01");
  });
});
