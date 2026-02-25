import { isFirstDayOfMonth } from "./index.js";

describe("isFirstDayOfMonth", () => {
  it("returns true for the first day of a month", () => {
    const date = Temporal.PlainDate.from("2024-06-01");
    expect(isFirstDayOfMonth(date)).toBe(true);
  });

  it("returns false for a non-first day", () => {
    const date = Temporal.PlainDate.from("2024-06-15");
    expect(isFirstDayOfMonth(date)).toBe(false);
  });

  it("returns true for January 1st", () => {
    const date = Temporal.PlainDate.from("2024-01-01");
    expect(isFirstDayOfMonth(date)).toBe(true);
  });

  it("works with PlainDateTime", () => {
    const date = Temporal.PlainDateTime.from("2024-03-01T10:00:00");
    expect(isFirstDayOfMonth(date)).toBe(true);
  });

  it("works with ZonedDateTime", () => {
    const date = Temporal.ZonedDateTime.from(
      "2024-12-01T00:00:00[America/Chicago]",
    );
    expect(isFirstDayOfMonth(date)).toBe(true);
  });
});
