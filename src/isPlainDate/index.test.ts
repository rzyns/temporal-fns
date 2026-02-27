import { describe } from "vitest";
import { isPlainDate } from "./index.js";

describe("isPlainDate", (it) => {
    it("returns true for PlainDate", ({ expect }) => {
        const pd = Temporal.PlainDate.from("2024-06-15");
        expect(isPlainDate(pd)).toBe(true);
    });

    it("returns false for PlainDateTime", ({ expect }) => {
        const pdt = Temporal.PlainDateTime.from("2024-06-15T10:30:00");
        expect(isPlainDate(pdt)).toBe(false);
    });

    it("returns false for ZonedDateTime", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from("2024-06-15T10:30:00[UTC]");
        expect(isPlainDate(zdt)).toBe(false);
    });

    it("returns false for non-Temporal values", ({ expect }) => {
        expect(isPlainDate(null)).toBe(false);
        expect(isPlainDate("2024-06-15")).toBe(false);
        expect(isPlainDate(new Date())).toBe(false);
        expect(isPlainDate(42)).toBe(false);
    });

    it("returns false for Instant", ({ expect }) => {
        const instant = Temporal.Instant.from("2024-01-01T00:00:00Z");
        expect(isPlainDate(instant)).toBe(false);
    });
});
