import { describe } from "vitest";
import { getEpochMilliseconds } from "./index.js";

describe("getEpochMilliseconds", (it) => {
    it("returns epoch milliseconds of an Instant", ({ expect }) => {
        const instant = Temporal.Instant.from("1970-01-01T00:00:00Z");
        expect(getEpochMilliseconds(instant)).toBe(0);
    });

    it("returns epoch milliseconds of a ZonedDateTime", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from("1970-01-01T00:00:00[UTC]");
        expect(getEpochMilliseconds(zdt)).toBe(0);
    });

    it("returns positive value for dates after epoch", ({ expect }) => {
        const instant = Temporal.Instant.from("2024-01-01T00:00:00Z");
        expect(getEpochMilliseconds(instant)).toBe(1704067200000);
    });

    it("returns negative value for dates before epoch", ({ expect }) => {
        const instant = Temporal.Instant.from("1969-12-31T23:59:59Z");
        expect(getEpochMilliseconds(instant)).toBe(-1000);
    });

    it("handles millisecond precision", ({ expect }) => {
        const instant = Temporal.Instant.from("1970-01-01T00:00:00.123Z");
        expect(getEpochMilliseconds(instant)).toBe(123);
    });
});
