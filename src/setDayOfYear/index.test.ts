import { setDayOfYear } from "./index.js";

describe("setDayOfYear", () => {
  it("sets day of year on a PlainDate", () => {
    const date = Temporal.PlainDate.from("2024-06-15");
    const result = setDayOfYear(date, 1);
    expect(result.toString()).toBe("2024-01-01");
  });

  it("sets day of year to the last day of a leap year", () => {
    const date = Temporal.PlainDate.from("2024-06-15");
    const result = setDayOfYear(date, 366);
    expect(result.toString()).toBe("2024-12-31");
  });

  it("sets day of year to Feb 29 in a leap year (day 60)", () => {
    const date = Temporal.PlainDate.from("2024-06-15");
    const result = setDayOfYear(date, 60);
    expect(result.toString()).toBe("2024-02-29");
  });

  it("sets day of year on a PlainDateTime and preserves time", () => {
    const dt = Temporal.PlainDateTime.from("2024-06-15T14:30:45.123");
    const result = setDayOfYear(dt, 100);
    expect(result.dayOfYear).toBe(100);
    expect(result.hour).toBe(14);
    expect(result.minute).toBe(30);
    expect(result.second).toBe(45);
    expect(result.millisecond).toBe(123);
  });

  it("sets day of year on a ZonedDateTime and preserves timezone", () => {
    const zdt = Temporal.ZonedDateTime.from(
      "2024-06-15T10:30:00[America/New_York]",
    );
    const result = setDayOfYear(zdt, 200);
    expect(result.dayOfYear).toBe(200);
    expect(result.timeZoneId).toBe("America/New_York");
  });

  it("sets day of year to the last day of a non-leap year", () => {
    const date = Temporal.PlainDate.from("2023-06-15");
    const result = setDayOfYear(date, 365);
    expect(result.toString()).toBe("2023-12-31");
  });
});
