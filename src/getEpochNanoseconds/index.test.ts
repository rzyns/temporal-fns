import { getEpochNanoseconds } from "./index.js";

describe("getEpochNanoseconds", () => {
    it("returns epoch nanoseconds of an Instant", () => {
        const instant = Temporal.Instant.from("1970-01-01T00:00:00Z");
        expect(getEpochNanoseconds(instant)).toBe(0n);
    });

    it("returns epoch nanoseconds of a ZonedDateTime", () => {
        const zdt = Temporal.ZonedDateTime.from("1970-01-01T00:00:00[UTC]");
        expect(getEpochNanoseconds(zdt)).toBe(0n);
    });

    it("returns positive value for dates after epoch", () => {
        const instant = Temporal.Instant.from("2024-01-01T00:00:00Z");
        expect(getEpochNanoseconds(instant)).toBe(1704067200000000000n);
    });

    it("returns negative value for dates before epoch", () => {
        const instant = Temporal.Instant.from("1969-12-31T23:59:59Z");
        expect(getEpochNanoseconds(instant)).toBe(-1000000000n);
    });

    it("handles nanosecond precision", () => {
        const instant = Temporal.Instant.from("1970-01-01T00:00:00.000000001Z");
        expect(getEpochNanoseconds(instant)).toBe(1n);
    });
});
