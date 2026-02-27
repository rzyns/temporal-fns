import { describe } from "vitest";
import { toTimeZone } from "./index.js";

describe("toTimeZone", (it) => {
    it("converts Instant to ZonedDateTime with correct timezone", ({
        expect,
    }) => {
        const instant = Temporal.Instant.from("2025-06-15T12:00:00Z");
        const result = toTimeZone(instant, "America/New_York");
        expect(result instanceof Temporal.ZonedDateTime).toBe(true);
        expect(result.timeZoneId).toBe("America/New_York");
    });

    it("preserves epoch when converting Instant", ({ expect }) => {
        const instant = Temporal.Instant.from("2025-06-15T12:00:00Z");
        const result = toTimeZone(instant, "Asia/Tokyo");
        expect(result.epochNanoseconds).toBe(instant.epochNanoseconds);
    });

    it("converts ZonedDateTime to a different timezone", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from(
            "2025-06-15T12:00:00[America/New_York]",
        );
        const result = toTimeZone(zdt, "Europe/London");
        expect(result instanceof Temporal.ZonedDateTime).toBe(true);
        expect(result.timeZoneId).toBe("Europe/London");
    });

    it("preserves epoch when converting ZonedDateTime", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from(
            "2025-06-15T12:00:00[America/New_York]",
        );
        const result = toTimeZone(zdt, "Asia/Tokyo");
        expect(result.epochNanoseconds).toBe(zdt.epochNanoseconds);
    });

    it("converts PlainDateTime to ZonedDateTime with matching fields", ({
        expect,
    }) => {
        const pdt = Temporal.PlainDateTime.from("2025-06-15T10:30:00");
        const result = toTimeZone(pdt, "America/Chicago");
        expect(result instanceof Temporal.ZonedDateTime).toBe(true);
        expect(result.timeZoneId).toBe("America/Chicago");
        expect(result.year).toBe(2025);
        expect(result.month).toBe(6);
        expect(result.day).toBe(15);
        expect(result.hour).toBe(10);
        expect(result.minute).toBe(30);
    });

    it("uses 'compatible' disambiguation by default for PlainDateTime", ({
        expect,
    }) => {
        // US spring-forward: 2025-03-09T02:30 does not exist in America/New_York
        const pdt = Temporal.PlainDateTime.from("2025-03-09T02:30:00");
        // "compatible" should not throw, it adjusts to a valid time
        const result = toTimeZone(pdt, "America/New_York");
        expect(result instanceof Temporal.ZonedDateTime).toBe(true);
        expect(result.timeZoneId).toBe("America/New_York");
    });

    it("disambiguation 'earlier' vs 'later' produce different results for fall-back", ({
        expect,
    }) => {
        // US fall-back: 2025-11-02T01:30 occurs twice in America/New_York
        const pdt = Temporal.PlainDateTime.from("2025-11-02T01:30:00");
        const earlier = toTimeZone(pdt, "America/New_York", {
            disambiguation: "earlier",
        });
        const later = toTimeZone(pdt, "America/New_York", {
            disambiguation: "later",
        });
        expect(earlier.epochNanoseconds).not.toBe(later.epochNanoseconds);
        // Earlier should be EDT (UTC-4), later should be EST (UTC-5)
        expect(earlier.offsetNanoseconds).not.toBe(later.offsetNanoseconds);
    });
});
