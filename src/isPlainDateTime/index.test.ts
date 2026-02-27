import { describe } from "vitest";
import { isPlainDateTime } from "./index.js";

describe("isPlainDateTime", (it) => {
    it("returns true for PlainDateTime", ({ expect }) => {
        const pdt = Temporal.PlainDateTime.from("2024-06-15T10:30:00");
        expect(isPlainDateTime(pdt)).toBe(true);
    });

    it("returns false for PlainDate", ({ expect }) => {
        const pd = Temporal.PlainDate.from("2024-06-15");
        expect(isPlainDateTime(pd)).toBe(false);
    });

    it("returns false for ZonedDateTime", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from("2024-06-15T10:30:00[UTC]");
        expect(isPlainDateTime(zdt)).toBe(false);
    });

    it("returns false for non-Temporal values", ({ expect }) => {
        expect(isPlainDateTime(null)).toBe(false);
        expect(isPlainDateTime("2024-06-15T10:30:00")).toBe(false);
        expect(isPlainDateTime({})).toBe(false);
        expect(isPlainDateTime(undefined)).toBe(false);
    });

    it("returns false for Instant", ({ expect }) => {
        const instant = Temporal.Instant.from("2024-01-01T00:00:00Z");
        expect(isPlainDateTime(instant)).toBe(false);
    });
});
