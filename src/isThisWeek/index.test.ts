import { isThisWeek } from "./index.js";
import type { ClockProvider } from "../types.js";

// 2024-06-15 is a Saturday. The ISO week (Mon start) is June 10-16.
const mockClock: ClockProvider = {
  instant: () => Temporal.Instant.from("2024-06-15T12:00:00Z"),
  zonedDateTimeISO: (tz?: string) =>
    Temporal.ZonedDateTime.from(`2024-06-15T12:00:00[${tz ?? "UTC"}]`),
  plainDateISO: (_tz?: string) => Temporal.PlainDate.from("2024-06-15"),
  plainDateTimeISO: (_tz?: string) =>
    Temporal.PlainDateTime.from("2024-06-15T12:00:00"),
  timeZoneId: () => "UTC",
};

describe("isThisWeek", () => {
  it("returns true for a date in the same week", () => {
    const date = Temporal.ZonedDateTime.from("2024-06-10T08:00:00[UTC]"); // Monday
    expect(isThisWeek(date, { clock: mockClock })).toBe(true);
  });

  it("returns true for the same day", () => {
    const date = Temporal.ZonedDateTime.from("2024-06-15T20:00:00[UTC]"); // Saturday
    expect(isThisWeek(date, { clock: mockClock })).toBe(true);
  });

  it("returns true for Sunday of the same week", () => {
    const date = Temporal.ZonedDateTime.from("2024-06-16T00:00:00[UTC]"); // Sunday
    expect(isThisWeek(date, { clock: mockClock })).toBe(true);
  });

  it("returns false for a date in the previous week", () => {
    const date = Temporal.ZonedDateTime.from("2024-06-09T23:59:59[UTC]"); // Previous Sunday
    expect(isThisWeek(date, { clock: mockClock })).toBe(false);
  });

  it("returns false for a date in the next week", () => {
    const date = Temporal.ZonedDateTime.from("2024-06-17T00:00:00[UTC]"); // Next Monday
    expect(isThisWeek(date, { clock: mockClock })).toBe(false);
  });

  it("respects weekStartsOn option", () => {
    // With Sunday as week start, June 15 (Sat) and June 9 (Sun) are in different weeks
    // June 9 (Sun) starts a week: June 9-15. June 15 is still in that week.
    const date = Temporal.ZonedDateTime.from("2024-06-09T12:00:00[UTC]");
    expect(
      isThisWeek(date, { clock: mockClock, weekStartsOn: 7 }),
    ).toBe(true);
  });
});
