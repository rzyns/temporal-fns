import { setQuarter } from "./index.js";

describe("setQuarter", () => {
  it("sets quarter from Q2 to Q1 on a PlainDate", () => {
    const date = Temporal.PlainDate.from("2024-06-15");
    const result = setQuarter(date, 1);
    expect(result.toString()).toBe("2024-03-15");
  });

  it("sets quarter from Q1 to Q4 on a PlainDate", () => {
    const date = Temporal.PlainDate.from("2024-02-15");
    const result = setQuarter(date, 4);
    expect(result.toString()).toBe("2024-11-15");
  });

  it("sets quarter on a PlainDateTime and preserves time", () => {
    const dt = Temporal.PlainDateTime.from("2024-01-15T14:30:00");
    const result = setQuarter(dt, 3);
    expect(result.month).toBe(7);
    expect(result.day).toBe(15);
    expect(result.hour).toBe(14);
    expect(result.minute).toBe(30);
  });

  it("sets quarter on a ZonedDateTime and preserves timezone", () => {
    const zdt = Temporal.ZonedDateTime.from("2024-04-15T10:30:00[America/New_York]");
    const result = setQuarter(zdt, 1);
    expect(result.month).toBe(1);
    expect(result.day).toBe(15);
    expect(result.timeZoneId).toBe("America/New_York");
  });

  it("returns same date when already in the target quarter", () => {
    const date = Temporal.PlainDate.from("2024-05-15");
    const result = setQuarter(date, 2);
    expect(result.toString()).toBe("2024-05-15");
  });

  it("handles end-of-month clamping when moving quarters", () => {
    // Jan 31 -> Q2 means April 30 (April has 30 days, Temporal clamps)
    const date = Temporal.PlainDate.from("2024-01-31");
    const result = setQuarter(date, 2);
    // Adding 3 months: Jan 31 + 3 months = Apr 30 (Temporal constrains)
    expect(result.month).toBe(4);
    expect(result.day).toBe(30);
  });
});
