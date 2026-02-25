import { isWorkingDay } from "./index.js";

describe("isWorkingDay", () => {
  it("returns true for weekdays by default", () => {
    const monday = Temporal.PlainDate.from("2024-01-15"); // Monday
    expect(isWorkingDay(monday)).toBe(true);
  });

  it("returns false for weekends by default", () => {
    const saturday = Temporal.PlainDate.from("2024-01-13"); // Saturday
    expect(isWorkingDay(saturday)).toBe(false);
    const sunday = Temporal.PlainDate.from("2024-01-14"); // Sunday
    expect(isWorkingDay(sunday)).toBe(false);
  });

  it("respects custom working days", () => {
    const saturday = Temporal.PlainDate.from("2024-01-13"); // Saturday
    expect(isWorkingDay(saturday, { workingDays: [1, 2, 3, 4, 6] })).toBe(true);
  });

  it("works with ZonedDateTime", () => {
    const zdt = Temporal.ZonedDateTime.from("2024-01-15T10:00:00[UTC]"); // Monday
    expect(isWorkingDay(zdt)).toBe(true);
  });
});
