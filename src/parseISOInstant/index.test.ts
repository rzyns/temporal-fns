import { parseISOInstant } from "./index.js";

describe("parseISOInstant", () => {
    it("parses an instant string", () => {
        const result = parseISOInstant("2024-06-15T10:30:00Z");
        expect(result).toBeInstanceOf(Temporal.Instant);
        expect(result.toString()).toBe("2024-06-15T10:30:00Z");
    });

    it("throws for invalid input", () => {
        expect(() => parseISOInstant("not-an-instant")).toThrow();
    });
});
