import { describe } from "vitest";
import { coerce } from "./index.js";

describe("coerce (without timeZone)", (it) => {
    it("parses an ISO date string to PlainDate", ({ expect }) => {
        const result = coerce("2024-06-15");
        expect(result).toBeInstanceOf(Temporal.PlainDate);
        expect(result.toString()).toBe("2024-06-15");
    });

    it("parses an ISO datetime string to PlainDateTime", ({ expect }) => {
        const result = coerce("2024-06-15T10:30:00");
        expect(result).toBeInstanceOf(Temporal.PlainDateTime);
        expect(result.toString()).toBe("2024-06-15T10:30:00");
    });

    it("parses an ISO zoned string to ZonedDateTime", ({ expect }) => {
        const result = coerce("2024-06-15T10:30:00+00:00[UTC]");
        expect(result).toBeInstanceOf(Temporal.ZonedDateTime);
    });

    it("parses an ISO instant string (Z suffix) to Instant", ({ expect }) => {
        const result = coerce("2024-06-15T10:30:00Z");
        expect(result).toBeInstanceOf(Temporal.Instant);
    });

    it("converts a number (epoch ms) to Instant", ({ expect }) => {
        const epochMs = 1718448600000;
        const result = coerce(epochMs);
        expect(result).toBeInstanceOf(Temporal.Instant);
        expect((result as Temporal.Instant).epochMilliseconds).toBe(epochMs);
    });

    it("converts a Date instance to Instant", ({ expect }) => {
        const date = new Date("2024-06-15T10:30:00Z");
        const result = coerce(date);
        expect(result).toBeInstanceOf(Temporal.Instant);
        expect((result as Temporal.Instant).epochMilliseconds).toBe(
            date.getTime(),
        );
    });

    it("passes through Temporal.Instant unchanged", ({ expect }) => {
        const instant = Temporal.Instant.from("2024-06-15T10:30:00Z");
        const result = coerce(instant);
        expect(result).toBe(instant);
    });

    it("passes through Temporal.ZonedDateTime unchanged", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-06-15T10:30:00[America/New_York]",
        );
        const result = coerce(zdt);
        expect(result).toBe(zdt);
    });

    it("passes through Temporal.PlainDateTime unchanged", ({ expect }) => {
        const pdt = Temporal.PlainDateTime.from("2024-06-15T10:30:00");
        const result = coerce(pdt);
        expect(result).toBe(pdt);
    });

    it("passes through Temporal.PlainDate unchanged", ({ expect }) => {
        const pd = Temporal.PlainDate.from("2024-06-15");
        const result = coerce(pd);
        expect(result).toBe(pd);
    });

    it("passes through Temporal.PlainTime unchanged", ({ expect }) => {
        const pt = Temporal.PlainTime.from("10:30:00");
        const result = coerce(pt);
        expect(result).toBe(pt);
    });

    it("throws RangeError for invalid string", ({ expect }) => {
        expect(() => coerce("not-a-date")).toThrow(RangeError);
    });
});

describe("coerce (with timeZone)", (it) => {
    it("converts an ISO date string to ZonedDateTime", ({ expect }) => {
        const result = coerce("2024-06-15", {
            timeZone: "America/New_York",
        });
        expect(result).toBeInstanceOf(Temporal.ZonedDateTime);
        expect(result.timeZoneId).toBe("America/New_York");
        expect(result.year).toBe(2024);
        expect(result.month).toBe(6);
        expect(result.day).toBe(15);
        expect(result.hour).toBe(0);
    });

    it("converts an ISO datetime string to ZonedDateTime", ({ expect }) => {
        const result = coerce("2024-06-15T10:30:00", {
            timeZone: "Europe/London",
        });
        expect(result).toBeInstanceOf(Temporal.ZonedDateTime);
        expect(result.timeZoneId).toBe("Europe/London");
        expect(result.hour).toBe(10);
    });

    it("converts an ISO instant string to ZonedDateTime", ({ expect }) => {
        const result = coerce("2024-06-15T10:30:00Z", {
            timeZone: "Asia/Tokyo",
        });
        expect(result).toBeInstanceOf(Temporal.ZonedDateTime);
        expect(result.timeZoneId).toBe("Asia/Tokyo");
    });

    it("converts a number (epoch ms) to ZonedDateTime", ({ expect }) => {
        const epochMs = 1718448600000;
        const result = coerce(epochMs, { timeZone: "UTC" });
        expect(result).toBeInstanceOf(Temporal.ZonedDateTime);
        expect(result.timeZoneId).toBe("UTC");
        expect(result.epochMilliseconds).toBe(epochMs);
    });

    it("converts a Date instance to ZonedDateTime", ({ expect }) => {
        const date = new Date("2024-06-15T10:30:00Z");
        const result = coerce(date, { timeZone: "UTC" });
        expect(result).toBeInstanceOf(Temporal.ZonedDateTime);
        expect(result.timeZoneId).toBe("UTC");
        expect(result.epochMilliseconds).toBe(date.getTime());
    });

    it("converts Temporal.Instant to ZonedDateTime", ({ expect }) => {
        const instant = Temporal.Instant.from("2024-06-15T10:30:00Z");
        const result = coerce(instant, { timeZone: "America/Chicago" });
        expect(result).toBeInstanceOf(Temporal.ZonedDateTime);
        expect(result.timeZoneId).toBe("America/Chicago");
    });

    it("converts ZonedDateTime to different timeZone", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-06-15T10:30:00[America/New_York]",
        );
        const result = coerce(zdt, { timeZone: "Europe/London" });
        expect(result).toBeInstanceOf(Temporal.ZonedDateTime);
        expect(result.timeZoneId).toBe("Europe/London");
    });

    it("converts PlainDateTime to ZonedDateTime", ({ expect }) => {
        const pdt = Temporal.PlainDateTime.from("2024-06-15T10:30:00");
        const result = coerce(pdt, { timeZone: "America/New_York" });
        expect(result).toBeInstanceOf(Temporal.ZonedDateTime);
        expect(result.timeZoneId).toBe("America/New_York");
        expect(result.hour).toBe(10);
    });

    it("converts PlainDate to ZonedDateTime at midnight", ({ expect }) => {
        const pd = Temporal.PlainDate.from("2024-06-15");
        const result = coerce(pd, { timeZone: "UTC" });
        expect(result).toBeInstanceOf(Temporal.ZonedDateTime);
        expect(result.timeZoneId).toBe("UTC");
        expect(result.hour).toBe(0);
        expect(result.minute).toBe(0);
        expect(result.second).toBe(0);
    });

    it("throws TypeError for PlainTime with timeZone", ({ expect }) => {
        const pt = Temporal.PlainTime.from("10:30:00");
        expect(() => coerce(pt, { timeZone: "UTC" })).toThrow(TypeError);
        expect(() => coerce(pt, { timeZone: "UTC" })).toThrow(
            "Cannot convert PlainTime to ZonedDateTime: no date component",
        );
    });

    it("always returns ZonedDateTime with correct timeZone id", ({
        expect,
    }) => {
        const inputs = [
            "2024-06-15",
            1718448600000,
            new Date("2024-06-15T10:30:00Z"),
            Temporal.Instant.from("2024-06-15T10:30:00Z"),
            Temporal.PlainDate.from("2024-06-15"),
            Temporal.PlainDateTime.from("2024-06-15T10:30:00"),
            Temporal.ZonedDateTime.from(
                "2024-06-15T10:30:00[America/New_York]",
            ),
        ] as const;

        for (const input of inputs) {
            const result = coerce(input, { timeZone: "Pacific/Auckland" });
            expect(result).toBeInstanceOf(Temporal.ZonedDateTime);
            expect(result.timeZoneId).toBe("Pacific/Auckland");
        }
    });
});

describe("coerce (passthrough identity)", (it) => {
    it("returns the exact same Instant object", ({ expect }) => {
        const instant = Temporal.Instant.from("2024-06-15T10:30:00Z");
        expect(coerce(instant)).toBe(instant);
    });

    it("returns the exact same ZonedDateTime object", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-06-15T10:30:00[America/New_York]",
        );
        expect(coerce(zdt)).toBe(zdt);
    });

    it("returns the exact same PlainDateTime object", ({ expect }) => {
        const pdt = Temporal.PlainDateTime.from("2024-06-15T10:30:00");
        expect(coerce(pdt)).toBe(pdt);
    });

    it("returns the exact same PlainDate object", ({ expect }) => {
        const pd = Temporal.PlainDate.from("2024-06-15");
        expect(coerce(pd)).toBe(pd);
    });

    it("returns the exact same PlainTime object", ({ expect }) => {
        const pt = Temporal.PlainTime.from("10:30:00");
        expect(coerce(pt)).toBe(pt);
    });
});
