import type { ClockProvider } from "../types.js";
import { isYesterday } from "./index.js";

const mockClock: ClockProvider = {
    instant: () => Temporal.Instant.from("2024-06-15T12:00:00Z"),
    zonedDateTimeISO: (tz?: string) =>
        Temporal.ZonedDateTime.from(`2024-06-15T12:00:00[${tz ?? "UTC"}]`),
    plainDateISO: (_tz?: string) => Temporal.PlainDate.from("2024-06-15"),
    plainDateTimeISO: (_tz?: string) =>
        Temporal.PlainDateTime.from("2024-06-15T12:00:00"),
    timeZoneId: () => "UTC",
};

describe("isYesterday", () => {
    it("returns true when the date is yesterday", () => {
        const date = Temporal.ZonedDateTime.from("2024-06-14T08:00:00[UTC]");
        expect(isYesterday(date, { clock: mockClock })).toBe(true);
    });

    it("returns false when the date is today", () => {
        const date = Temporal.ZonedDateTime.from("2024-06-15T12:00:00[UTC]");
        expect(isYesterday(date, { clock: mockClock })).toBe(false);
    });

    it("returns false when the date is tomorrow", () => {
        const date = Temporal.ZonedDateTime.from("2024-06-16T12:00:00[UTC]");
        expect(isYesterday(date, { clock: mockClock })).toBe(false);
    });

    it("returns true regardless of time-of-day", () => {
        const date = Temporal.ZonedDateTime.from("2024-06-14T23:59:59[UTC]");
        expect(isYesterday(date, { clock: mockClock })).toBe(true);
    });
});
