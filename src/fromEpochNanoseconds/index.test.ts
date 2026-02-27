import { fromEpochNanoseconds } from "./index.js";

describe("fromEpochNanoseconds", () => {
    it("creates an Instant from epoch nanoseconds", () => {
        const result = fromEpochNanoseconds(0n);
        expect(result instanceof Temporal.Instant).toBe(true);
        expect(result.epochMilliseconds).toBe(0);
    });

    it("handles a known timestamp", () => {
        // 2024-01-01T00:00:00Z in nanoseconds
        const ns = 1704067200000000000n;
        const result = fromEpochNanoseconds(ns);
        expect(result.toString()).toBe("2024-01-01T00:00:00Z");
    });

    it("handles negative nanoseconds (before epoch)", () => {
        const result = fromEpochNanoseconds(-1000000000n);
        expect(result.epochMilliseconds).toBe(-1000);
    });

    it("preserves nanosecond precision", () => {
        const ns = 1704067200000000001n;
        const result = fromEpochNanoseconds(ns);
        // The instant should differ from the whole-second value
        expect(result.epochNanoseconds).toBe(ns);
    });
});
