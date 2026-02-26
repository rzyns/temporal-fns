import { getWeekOfYear } from "./index.js";

describe("getWeekOfYear", () => {
  it("returns the ISO week number of a PlainDate", () => {
    // 2024-01-01 is a Monday, ISO week 1
    const date = Temporal.PlainDate.from("2024-01-01");
    expect(getWeekOfYear(date)).toBe(1);
  });

  it("returns the ISO week number of a PlainDateTime", () => {
    const dt = Temporal.PlainDateTime.from("2024-06-15T10:30:00");
    expect(getWeekOfYear(dt)).toBe(24);
  });

  it("returns the ISO week number of a ZonedDateTime", () => {
    const zdt = Temporal.ZonedDateTime.from(
      "2024-12-31T10:30:00[America/New_York]",
    );
    expect(getWeekOfYear(zdt)).toBe(1); // Dec 31, 2024 is in ISO week 1 of 2025
  });

  it("handles the start of the year when it belongs to the previous year's last week", () => {
    // 2023-01-01 is a Sunday, which is ISO week 52 of 2022
    const date = Temporal.PlainDate.from("2023-01-01");
    expect(getWeekOfYear(date)).toBe(52);
  });

  it("returns week 1 for the first Monday of 2024", () => {
    const date = Temporal.PlainDate.from("2024-01-01");
    expect(getWeekOfYear(date)).toBe(1);
  });
});
