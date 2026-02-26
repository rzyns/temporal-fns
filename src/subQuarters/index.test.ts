import { subQuarters } from "./index.js";

describe("subQuarters", () => {
  it("subtracts quarters from a PlainDate", () => {
    const date = Temporal.PlainDate.from("2024-04-15");
    const result = subQuarters(date, 1);
    expect(result.toString()).toBe("2024-01-15");
  });

  it("subtracts quarters from a PlainDateTime", () => {
    const dt = Temporal.PlainDateTime.from("2024-07-15T10:00:00");
    const result = subQuarters(dt, 2);
    expect(result.toString()).toBe("2024-01-15T10:00:00");
  });

  it("subtracts quarters from a ZonedDateTime", () => {
    const zdt = Temporal.ZonedDateTime.from(
      "2025-01-01T00:00:00[America/New_York]",
    );
    const result = subQuarters(zdt, 4);
    expect(result.year).toBe(2024);
    expect(result.month).toBe(1);
  });

  it("crosses year boundaries backwards", () => {
    const date = Temporal.PlainDate.from("2024-03-01");
    const result = subQuarters(date, 2);
    expect(result.toString()).toBe("2023-09-01");
  });
});
