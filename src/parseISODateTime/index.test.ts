import { describe } from "vitest";
import { parseISODateTime } from "./index.js";

describe("parseISODateTime", (it) => {
    it("parses a datetime string", ({ expect }) => {
        const result = parseISODateTime("2024-06-15T10:30:00");
        expect(result).toBeInstanceOf(Temporal.PlainDateTime);
        expect(result.toString()).toBe("2024-06-15T10:30:00");
    });

    it("throws for invalid input", ({ expect }) => {
        expect(() => parseISODateTime("not-a-datetime")).toThrow();
    });
});
