import type { ClockProvider } from "../types.js";
import { isThisYear } from "./index.js";

const mockClock: ClockProvider = {
  instant: () => Temporal.Instant.from("2024-06-15T12:00:00Z"),
  zonedDateTimeISO: (tz?: string) =>
    Temporal.ZonedDateTime.from(`2024-06-15T12:00:00[${tz ?? "UTC"}]`),
  plainDateISO: (_tz?: string) => Temporal.PlainDate.from("2024-06-15"),
  plainDateTimeISO: (_tz?: string) =>
    Temporal.PlainDateTime.from("2024-06-15T12:00:00"),
  timeZoneId: () => "UTC",
};

describe("isThisYear", () => {
  it("returns true for a date in the same year", () => {
    const date = Temporal.ZonedDateTime.from("2024-01-01T00:00:00[UTC]");
    expect(isThisYear(date, { clock: mockClock })).toBe(true);
  });

  it("returns true for the last day of the same year", () => {
    const date = Temporal.ZonedDateTime.from("2024-12-31T23:59:59[UTC]");
    expect(isThisYear(date, { clock: mockClock })).toBe(true);
  });

  it("returns false for a different year", () => {
    const date = Temporal.ZonedDateTime.from("2023-06-15T12:00:00[UTC]");
    expect(isThisYear(date, { clock: mockClock })).toBe(false);
  });

  it("returns false for a future year", () => {
    const date = Temporal.ZonedDateTime.from("2025-06-15T12:00:00[UTC]");
    expect(isThisYear(date, { clock: mockClock })).toBe(false);
  });
});
