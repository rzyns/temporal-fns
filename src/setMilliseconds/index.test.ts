import { setMilliseconds } from "./index.js";

describe("setMilliseconds", () => {
  it("sets the milliseconds of a PlainDateTime", () => {
    const dt = Temporal.PlainDateTime.from("2024-06-15T10:30:45.123");
    const result = setMilliseconds(dt, 0);
    expect(result.millisecond).toBe(0);
    expect(result.second).toBe(45);
  });

  it("sets the milliseconds of a ZonedDateTime and preserves timezone", () => {
    const zdt = Temporal.ZonedDateTime.from(
      "2024-06-15T10:30:00[America/New_York]",
    );
    const result = setMilliseconds(zdt, 999);
    expect(result.millisecond).toBe(999);
    expect(result.hour).toBe(10);
    expect(result.minute).toBe(30);
    expect(result.timeZoneId).toBe("America/New_York");
  });

  it("preserves other time components", () => {
    const dt = Temporal.PlainDateTime.from("2024-06-15T10:30:45.123456789");
    const result = setMilliseconds(dt, 500);
    expect(result.millisecond).toBe(500);
    expect(result.hour).toBe(10);
    expect(result.minute).toBe(30);
    expect(result.second).toBe(45);
    expect(result.microsecond).toBe(456);
    expect(result.nanosecond).toBe(789);
  });

  it("sets milliseconds to 0", () => {
    const dt = Temporal.PlainDateTime.from("2024-06-15T10:30:45.999");
    const result = setMilliseconds(dt, 0);
    expect(result.millisecond).toBe(0);
  });

  it("preserves date components", () => {
    const zdt = Temporal.ZonedDateTime.from(
      "2024-12-31T23:59:59.999[Europe/London]",
    );
    const result = setMilliseconds(zdt, 500);
    expect(result.millisecond).toBe(500);
    expect(result.year).toBe(2024);
    expect(result.month).toBe(12);
    expect(result.day).toBe(31);
    expect(result.hour).toBe(23);
    expect(result.minute).toBe(59);
    expect(result.second).toBe(59);
  });
});
