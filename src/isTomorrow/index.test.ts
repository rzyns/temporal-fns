import { describe } from "vitest";
import type { ClockProvider } from "../types.js";
import { isTomorrow } from "./index.js";

const mockClock: ClockProvider = {
    instant: () => Temporal.Instant.from("2024-06-15T12:00:00Z"),
    zonedDateTimeISO: (tz?: string) =>
        Temporal.ZonedDateTime.from(`2024-06-15T12:00:00[${tz ?? "UTC"}]`),
    plainDateISO: (_tz?: string) => Temporal.PlainDate.from("2024-06-15"),
    plainDateTimeISO: (_tz?: string) =>
        Temporal.PlainDateTime.from("2024-06-15T12:00:00"),
    timeZoneId: () => "UTC",
};

describe("isTomorrow", (it) => {
    it("returns true when the date is tomorrow", ({ expect }) => {
        const date = Temporal.ZonedDateTime.from("2024-06-16T08:00:00[UTC]");
        expect(isTomorrow(date, { clock: mockClock })).toBe(true);
    });

    it("returns false when the date is today", ({ expect }) => {
        const date = Temporal.ZonedDateTime.from("2024-06-15T12:00:00[UTC]");
        expect(isTomorrow(date, { clock: mockClock })).toBe(false);
    });

    it("returns false when the date is yesterday", ({ expect }) => {
        const date = Temporal.ZonedDateTime.from("2024-06-14T12:00:00[UTC]");
        expect(isTomorrow(date, { clock: mockClock })).toBe(false);
    });

    it("returns true regardless of time-of-day", ({ expect }) => {
        const date = Temporal.ZonedDateTime.from("2024-06-16T23:59:59[UTC]");
        expect(isTomorrow(date, { clock: mockClock })).toBe(true);
    });
});
