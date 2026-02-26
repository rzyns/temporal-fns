import type { ClockProvider } from "../types.js";
import { isToday } from "./index.js";

const mockClock: ClockProvider = {
  instant: () => Temporal.Instant.from("2024-06-15T12:00:00Z"),
  zonedDateTimeISO: (tz?: string) =>
    Temporal.ZonedDateTime.from(`2024-06-15T12:00:00[${tz ?? "UTC"}]`),
  plainDateISO: (_tz?: string) => Temporal.PlainDate.from("2024-06-15"),
  plainDateTimeISO: (_tz?: string) =>
    Temporal.PlainDateTime.from("2024-06-15T12:00:00"),
  timeZoneId: () => "UTC",
};

describe("isToday", () => {
  it("returns true when the date is today", () => {
    const date = Temporal.ZonedDateTime.from("2024-06-15T08:00:00[UTC]");
    expect(isToday(date, { clock: mockClock })).toBe(true);
  });

  it("returns true regardless of time-of-day", () => {
    const date = Temporal.ZonedDateTime.from("2024-06-15T23:59:59[UTC]");
    expect(isToday(date, { clock: mockClock })).toBe(true);
  });

  it("returns false when the date is not today", () => {
    const date = Temporal.ZonedDateTime.from("2024-06-14T12:00:00[UTC]");
    expect(isToday(date, { clock: mockClock })).toBe(false);
  });

  it("returns false for tomorrow", () => {
    const date = Temporal.ZonedDateTime.from("2024-06-16T00:00:00[UTC]");
    expect(isToday(date, { clock: mockClock })).toBe(false);
  });
});
