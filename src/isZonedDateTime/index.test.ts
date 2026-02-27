import { describe } from "vitest";
import { isZonedDateTime } from "./index.js";

describe("isZonedDateTime", (it) => {
    it("returns true for ZonedDateTime", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from("2024-06-15T10:30:00[UTC]");
        expect(isZonedDateTime(zdt)).toBe(true);
    });

    it("returns false for PlainDateTime", ({ expect }) => {
        const pdt = Temporal.PlainDateTime.from("2024-06-15T10:30:00");
        expect(isZonedDateTime(pdt)).toBe(false);
    });

    it("returns false for PlainDate", ({ expect }) => {
        const pd = Temporal.PlainDate.from("2024-06-15");
        expect(isZonedDateTime(pd)).toBe(false);
    });

    it("returns false for non-Temporal values", ({ expect }) => {
        expect(isZonedDateTime(null)).toBe(false);
        expect(isZonedDateTime("2024-06-15T10:30:00[UTC]")).toBe(false);
        expect(isZonedDateTime({})).toBe(false);
        expect(isZonedDateTime(undefined)).toBe(false);
    });

    it("returns false for Instant", ({ expect }) => {
        const instant = Temporal.Instant.from("2024-01-01T00:00:00Z");
        expect(isZonedDateTime(instant)).toBe(false);
    });
});
