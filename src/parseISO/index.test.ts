import { parseISO } from "./index.js";

describe("parseISO", () => {
    it("parses a ZonedDateTime string", () => {
        const result = parseISO("2024-06-15T10:30:00[America/New_York]");
        expect(result).toBeInstanceOf(Temporal.ZonedDateTime);
    });

    it("parses an Instant string", () => {
        const result = parseISO("2024-06-15T10:30:00Z");
        expect(result).toBeInstanceOf(Temporal.Instant);
    });

    it("parses a PlainDateTime string", () => {
        const result = parseISO("2024-06-15T10:30:00");
        expect(result).toBeInstanceOf(Temporal.PlainDateTime);
    });

    it("parses a PlainDate string", () => {
        const result = parseISO("2024-06-15");
        expect(result).toBeInstanceOf(Temporal.PlainDate);
    });

    it("parses a PlainTime string", () => {
        const result = parseISO("10:30:00");
        expect(result).toBeInstanceOf(Temporal.PlainTime);
    });

    it("throws for invalid string", () => {
        expect(() => parseISO("not-a-date")).toThrow(RangeError);
    });
});
