import { describe } from "vitest";
import type { ClockProvider } from "../types.js";
import { toLocal } from "./index.js";

const mockClock: ClockProvider = {
    instant: () => Temporal.Instant.from("2025-06-15T12:00:00Z"),
    zonedDateTimeISO: (tz) =>
        Temporal.ZonedDateTime.from(
            `2025-06-15T08:00:00[${tz ?? "America/New_York"}]`,
        ),
    plainDateISO: () => Temporal.PlainDate.from("2025-06-15"),
    plainDateTimeISO: () => Temporal.PlainDateTime.from("2025-06-15T08:00:00"),
    timeZoneId: () => "America/New_York",
};

describe("toLocal", (it) => {
    it("converts Instant to ZonedDateTime in mocked timezone", ({ expect }) => {
        const instant = Temporal.Instant.from("2025-06-15T12:00:00Z");
        const result = toLocal(instant, { clock: mockClock });
        expect(result instanceof Temporal.ZonedDateTime).toBe(true);
        expect(result.timeZoneId).toBe("America/New_York");
        expect(result.epochNanoseconds).toBe(instant.epochNanoseconds);
    });

    it("converts ZonedDateTime to mocked timezone", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from(
            "2025-06-15T12:00:00[Asia/Tokyo]",
        );
        const result = toLocal(zdt, { clock: mockClock });
        expect(result instanceof Temporal.ZonedDateTime).toBe(true);
        expect(result.timeZoneId).toBe("America/New_York");
        expect(result.epochNanoseconds).toBe(zdt.epochNanoseconds);
    });

    it("defaults to systemClock and returns a ZonedDateTime", ({ expect }) => {
        const instant = Temporal.Instant.from("2025-06-15T12:00:00Z");
        const result = toLocal(instant);
        expect(result instanceof Temporal.ZonedDateTime).toBe(true);
    });
});
