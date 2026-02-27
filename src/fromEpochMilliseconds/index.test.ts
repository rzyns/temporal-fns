import { describe } from "vitest";
import { fromEpochMilliseconds } from "./index.js";

describe("fromEpochMilliseconds", (it) => {
    it("creates an Instant from epoch milliseconds", ({ expect }) => {
        const result = fromEpochMilliseconds(0);
        expect(result instanceof Temporal.Instant).toBe(true);
        expect(result.epochMilliseconds).toBe(0);
    });

    it("handles a known timestamp", ({ expect }) => {
        // 2024-01-01T00:00:00Z in milliseconds
        const ms = 1704067200000;
        const result = fromEpochMilliseconds(ms);
        expect(result.epochMilliseconds).toBe(ms);
        expect(result.toString()).toBe("2024-01-01T00:00:00Z");
    });

    it("handles negative timestamps (before epoch)", ({ expect }) => {
        // 1969-12-31T23:59:59Z
        const result = fromEpochMilliseconds(-1000);
        expect(result.epochMilliseconds).toBe(-1000);
    });

    it("handles large timestamps", ({ expect }) => {
        const ms = 2000000000000; // 2033-05-18T03:33:20Z
        const result = fromEpochMilliseconds(ms);
        expect(result.epochMilliseconds).toBe(ms);
    });
});
