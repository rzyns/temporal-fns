import { parseISODate } from "./index.js";

describe("parseISODate", () => {
    it("parses a date string", () => {
        const result = parseISODate("2024-06-15");
        expect(result).toBeInstanceOf(Temporal.PlainDate);
        expect(result.toString()).toBe("2024-06-15");
    });

    it("throws for invalid input", () => {
        expect(() => parseISODate("not-a-date")).toThrow();
    });
});
