import { getDayOfYear } from "./index.js";

describe("getDayOfYear", () => {
  it("returns the day of year of a PlainDate", () => {
    const date = Temporal.PlainDate.from("2024-01-01");
    expect(getDayOfYear(date)).toBe(1);
  });

  it("returns the day of year of a PlainDateTime", () => {
    // Feb 1 = day 32 (31 days in Jan + 1)
    const dt = Temporal.PlainDateTime.from("2024-02-01T10:30:00");
    expect(getDayOfYear(dt)).toBe(32);
  });

  it("returns the day of year of a ZonedDateTime", () => {
    const zdt = Temporal.ZonedDateTime.from("2024-12-31T10:30:00[America/New_York]");
    expect(getDayOfYear(zdt)).toBe(366); // 2024 is a leap year
  });

  it("returns 365 for Dec 31 in a non-leap year", () => {
    const date = Temporal.PlainDate.from("2023-12-31");
    expect(getDayOfYear(date)).toBe(365);
  });

  it("returns 366 for Dec 31 in a leap year", () => {
    const date = Temporal.PlainDate.from("2024-12-31");
    expect(getDayOfYear(date)).toBe(366);
  });
});
