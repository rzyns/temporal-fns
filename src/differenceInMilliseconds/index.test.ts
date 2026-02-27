import { describe } from "vitest";
import { differenceInMilliseconds } from "./index.js";

describe("differenceInMilliseconds", (it) => {
    it("returns the number of milliseconds between two Instants", ({
        expect,
    }) => {
        const left = Temporal.Instant.from("2024-01-15T14:00:01Z");
        const right = Temporal.Instant.from("2024-01-15T14:00:00Z");
        expect(differenceInMilliseconds(left, right)).toBe(1000);
    });

    it("returns a negative number when dateLeft is before dateRight", ({
        expect,
    }) => {
        const left = Temporal.Instant.from("2024-01-15T14:00:00Z");
        const right = Temporal.Instant.from("2024-01-15T14:00:05Z");
        expect(differenceInMilliseconds(left, right)).toBe(-5000);
    });

    it("returns 0 for the same instant", ({ expect }) => {
        const instant = Temporal.Instant.from("2024-01-15T12:00:00Z");
        expect(differenceInMilliseconds(instant, instant)).toBe(0);
    });

    it("handles sub-second precision", ({ expect }) => {
        const left = Temporal.Instant.from("2024-01-15T14:00:00.500Z");
        const right = Temporal.Instant.from("2024-01-15T14:00:00.200Z");
        expect(differenceInMilliseconds(left, right)).toBe(300);
    });

    it("works with ZonedDateTime inputs", ({ expect }) => {
        const left = Temporal.ZonedDateTime.from(
            "2024-01-15T14:00:01[America/New_York]",
        );
        const right = Temporal.ZonedDateTime.from(
            "2024-01-15T14:00:00[America/New_York]",
        );
        expect(differenceInMilliseconds(left, right)).toBe(1000);
    });

    it("works with mixed Instant and ZonedDateTime", ({ expect }) => {
        const instant = Temporal.Instant.from("2024-01-15T19:00:01Z");
        const zdt = Temporal.ZonedDateTime.from(
            "2024-01-15T14:00:00-05:00[America/New_York]",
        );
        // 14:00 EST = 19:00 UTC, so diff = 1000ms
        expect(differenceInMilliseconds(instant, zdt)).toBe(1000);
    });

    it("throws TypeError for PlainDate input", ({ expect }) => {
        const plain = Temporal.PlainDate.from("2024-01-15");
        const instant = Temporal.Instant.from("2024-01-15T12:00:00Z");
        expect(() => differenceInMilliseconds(plain, instant)).toThrow(
            TypeError,
        );
    });

    it("throws TypeError for PlainDateTime input", ({ expect }) => {
        const pdt = Temporal.PlainDateTime.from("2024-01-15T12:00:00");
        const instant = Temporal.Instant.from("2024-01-15T12:00:00Z");
        expect(() => differenceInMilliseconds(pdt, instant)).toThrow(TypeError);
    });
});
