import { setMonth } from "./index.js";

describe("setMonth", () => {
  it("sets the month of a PlainDate", () => {
    const date = Temporal.PlainDate.from("2024-06-15");
    const result = setMonth(date, 1);
    expect(result.toString()).toBe("2024-01-15");
  });

  it("sets the month of a PlainDateTime", () => {
    const dt = Temporal.PlainDateTime.from("2024-06-15T10:30:00");
    const result = setMonth(dt, 12);
    expect(result.toString()).toBe("2024-12-15T10:30:00");
  });

  it("sets the month of a ZonedDateTime and preserves timezone", () => {
    const zdt = Temporal.ZonedDateTime.from("2024-06-15T10:30:00[America/New_York]");
    const result = setMonth(zdt, 3);
    expect(result.month).toBe(3);
    expect(result.day).toBe(15);
    expect(result.hour).toBe(10);
    expect(result.timeZoneId).toBe("America/New_York");
  });

  it("clamps day when setting month with fewer days (day 31 -> Feb)", () => {
    const date = Temporal.PlainDate.from("2024-01-31");
    const result = setMonth(date, 2);
    // 2024 is leap year, Feb has 29 days, so 31 clamps to 29
    expect(result.toString()).toBe("2024-02-29");
  });

  it("clamps day when setting to Feb in non-leap year", () => {
    const date = Temporal.PlainDate.from("2023-01-31");
    const result = setMonth(date, 2);
    expect(result.toString()).toBe("2023-02-28");
  });

  it("preserves time components for PlainDateTime", () => {
    const dt = Temporal.PlainDateTime.from("2024-06-15T14:30:45.123");
    const result = setMonth(dt, 9);
    expect(result.month).toBe(9);
    expect(result.hour).toBe(14);
    expect(result.minute).toBe(30);
    expect(result.second).toBe(45);
    expect(result.millisecond).toBe(123);
  });
});
