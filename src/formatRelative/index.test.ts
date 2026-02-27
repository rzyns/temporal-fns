import { describe } from "vitest";
import { formatRelative } from "./index.js";

describe("formatRelative", (it) => {
    const mockClock = {
        instant: () => Temporal.Instant.from("2024-06-15T12:00:00Z"),
        zonedDateTimeISO: (tz?: string) =>
            Temporal.ZonedDateTime.from(`2024-06-15T12:00:00[${tz ?? "UTC"}]`),
        plainDateISO: (_tz?: string) => Temporal.PlainDate.from("2024-06-15"),
        plainDateTimeISO: (_tz?: string) =>
            Temporal.PlainDateTime.from("2024-06-15T12:00:00"),
        timeZoneId: () => "UTC",
    };

    it("formats a date in the future as relative", ({ expect }) => {
        const future = Temporal.ZonedDateTime.from("2024-06-16T12:00:00[UTC]");
        const result = formatRelative(future, { clock: mockClock });
        expect(result).toContain("tomorrow");
    });

    it("formats a date in the past as relative", ({ expect }) => {
        const past = Temporal.ZonedDateTime.from("2024-06-14T12:00:00[UTC]");
        const result = formatRelative(past, { clock: mockClock });
        expect(result).toContain("yesterday");
    });

    it("formats hours difference", ({ expect }) => {
        const future = Temporal.ZonedDateTime.from("2024-06-15T15:00:00[UTC]");
        const result = formatRelative(future, { clock: mockClock });
        expect(result).toContain("3");
        expect(result).toContain("hour");
    });
});
