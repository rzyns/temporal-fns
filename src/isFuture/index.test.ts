import { describe } from "vitest";
import type { ClockProvider } from "../types.js";
import { isFuture } from "./index.js";

const mockClock: ClockProvider = {
    instant: () => Temporal.Instant.from("2024-06-15T12:00:00Z"),
    zonedDateTimeISO: (tz?: string) =>
        Temporal.ZonedDateTime.from(`2024-06-15T12:00:00[${tz ?? "UTC"}]`),
    plainDateISO: (_tz?: string) => Temporal.PlainDate.from("2024-06-15"),
    plainDateTimeISO: (_tz?: string) =>
        Temporal.PlainDateTime.from("2024-06-15T12:00:00"),
    timeZoneId: () => "UTC",
};

describe("isFuture", (it) => {
    it("returns true for a future Instant", ({ expect }) => {
        const date = Temporal.Instant.from("2024-06-15T13:00:00Z");
        expect(isFuture(date, { clock: mockClock })).toBe(true);
    });

    it("returns false for a past Instant", ({ expect }) => {
        const date = Temporal.Instant.from("2024-06-15T11:00:00Z");
        expect(isFuture(date, { clock: mockClock })).toBe(false);
    });

    it("returns false for the exact same instant", ({ expect }) => {
        const date = Temporal.Instant.from("2024-06-15T12:00:00Z");
        expect(isFuture(date, { clock: mockClock })).toBe(false);
    });

    it("works with ZonedDateTime", ({ expect }) => {
        const date = Temporal.ZonedDateTime.from(
            "2024-12-25T00:00:00[America/New_York]",
        );
        expect(isFuture(date, { clock: mockClock })).toBe(true);
    });

    it("returns false for a far past ZonedDateTime", ({ expect }) => {
        const date = Temporal.ZonedDateTime.from("2020-01-01T00:00:00[UTC]");
        expect(isFuture(date, { clock: mockClock })).toBe(false);
    });
});
