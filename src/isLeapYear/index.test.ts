import { isLeapYear } from "./index.js";

describe("isLeapYear", () => {
  it("returns true for a leap year (PlainDate)", () => {
    const date = Temporal.PlainDate.from("2024-03-01");
    expect(isLeapYear(date)).toBe(true);
  });

  it("returns false for a non-leap year (PlainDate)", () => {
    const date = Temporal.PlainDate.from("2023-03-01");
    expect(isLeapYear(date)).toBe(false);
  });

  it("returns true for a century leap year", () => {
    const date = Temporal.PlainDate.from("2000-06-15");
    expect(isLeapYear(date)).toBe(true);
  });

  it("returns false for a century non-leap year", () => {
    const date = Temporal.PlainDate.from("1900-06-15");
    expect(isLeapYear(date)).toBe(false);
  });

  it("works with PlainDateTime", () => {
    const date = Temporal.PlainDateTime.from("2024-06-15T12:00:00");
    expect(isLeapYear(date)).toBe(true);
  });

  it("works with ZonedDateTime", () => {
    const date = Temporal.ZonedDateTime.from(
      "2024-06-15T12:00:00[America/New_York]",
    );
    expect(isLeapYear(date)).toBe(true);
  });
});
