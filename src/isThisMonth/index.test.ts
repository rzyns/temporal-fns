import { describe } from "vitest";
import type { ClockProvider } from "../types.js";
import { isThisMonth } from "./index.js";

const mockClock: ClockProvider = {
    instant: () => Temporal.Instant.from("2024-06-15T12:00:00Z"),
    zonedDateTimeISO: (tz?: string) =>
        Temporal.ZonedDateTime.from(`2024-06-15T12:00:00[${tz ?? "UTC"}]`),
    plainDateISO: (_tz?: string) => Temporal.PlainDate.from("2024-06-15"),
    plainDateTimeISO: (_tz?: string) =>
        Temporal.PlainDateTime.from("2024-06-15T12:00:00"),
    timeZoneId: () => "UTC",
};

describe("isThisMonth", (it) => {
    it("returns true for a date in the same month and year", ({ expect }) => {
        const date = Temporal.ZonedDateTime.from("2024-06-01T00:00:00[UTC]");
        expect(isThisMonth(date, { clock: mockClock })).toBe(true);
    });

    it("returns true for the last day of the same month", ({ expect }) => {
        const date = Temporal.ZonedDateTime.from("2024-06-30T23:59:59[UTC]");
        expect(isThisMonth(date, { clock: mockClock })).toBe(true);
    });

    it("returns false for a different month", ({ expect }) => {
        const date = Temporal.ZonedDateTime.from("2024-07-01T00:00:00[UTC]");
        expect(isThisMonth(date, { clock: mockClock })).toBe(false);
    });

    it("returns false for the same month in a different year", ({ expect }) => {
        const date = Temporal.ZonedDateTime.from("2023-06-15T12:00:00[UTC]");
        expect(isThisMonth(date, { clock: mockClock })).toBe(false);
    });
});
