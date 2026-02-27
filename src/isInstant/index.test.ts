import { describe } from "vitest";
import { isInstant } from "./index.js";

describe("isInstant", (it) => {
    it("returns true for Instant", ({ expect }) => {
        const instant = Temporal.Instant.from("2024-01-01T00:00:00Z");
        expect(isInstant(instant)).toBe(true);
    });

    it("returns true for Instant from epoch", ({ expect }) => {
        const instant = Temporal.Instant.fromEpochMilliseconds(0);
        expect(isInstant(instant)).toBe(true);
    });

    it("returns false for ZonedDateTime", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from("2024-06-15T10:30:00[UTC]");
        expect(isInstant(zdt)).toBe(false);
    });

    it("returns false for PlainDateTime", ({ expect }) => {
        const pdt = Temporal.PlainDateTime.from("2024-06-15T10:30:00");
        expect(isInstant(pdt)).toBe(false);
    });

    it("returns false for non-Temporal values", ({ expect }) => {
        expect(isInstant(null)).toBe(false);
        expect(isInstant("2024-01-01T00:00:00Z")).toBe(false);
        expect(isInstant(new Date())).toBe(false);
        expect(isInstant(42)).toBe(false);
        expect(isInstant(undefined)).toBe(false);
    });
});
