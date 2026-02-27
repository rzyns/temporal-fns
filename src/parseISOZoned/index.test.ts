import { describe } from "vitest";
import { parseISOZoned } from "./index.js";

describe("parseISOZoned", (it) => {
    it("parses a zoned datetime string", ({ expect }) => {
        const result = parseISOZoned("2024-06-15T10:30:00[America/New_York]");
        expect(result).toBeInstanceOf(Temporal.ZonedDateTime);
        expect(result.timeZoneId).toBe("America/New_York");
    });

    it("throws for invalid input", ({ expect }) => {
        expect(() => parseISOZoned("not-a-zoned-datetime")).toThrow();
    });
});
