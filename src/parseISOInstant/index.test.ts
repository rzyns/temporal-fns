import { describe } from "vitest";
import { parseISOInstant } from "./index.js";

describe("parseISOInstant", (it) => {
    it("parses an instant string", ({ expect }) => {
        const result = parseISOInstant("2024-06-15T10:30:00Z");
        expect(result).toBeInstanceOf(Temporal.Instant);
        expect(result.toString()).toBe("2024-06-15T10:30:00Z");
    });

    it("throws for invalid input", ({ expect }) => {
        expect(() => parseISOInstant("not-an-instant")).toThrow();
    });
});
