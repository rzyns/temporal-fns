import { describe } from "vitest";
import { isValid } from "./index.js";

describe("isValid", (it) => {
    it("returns true for PlainDate", ({ expect }) => {
        expect(isValid(Temporal.PlainDate.from("2024-06-15"))).toBe(true);
    });

    it("returns true for PlainDateTime", ({ expect }) => {
        expect(
            isValid(Temporal.PlainDateTime.from("2024-06-15T12:00:00")),
        ).toBe(true);
    });

    it("returns true for ZonedDateTime", ({ expect }) => {
        expect(
            isValid(Temporal.ZonedDateTime.from("2024-06-15T12:00:00[UTC]")),
        ).toBe(true);
    });

    it("returns true for Instant", ({ expect }) => {
        expect(isValid(Temporal.Instant.from("2024-06-15T12:00:00Z"))).toBe(
            true,
        );
    });

    it("returns true for PlainTime", ({ expect }) => {
        expect(isValid(Temporal.PlainTime.from("12:00:00"))).toBe(true);
    });

    it("returns true for PlainYearMonth", ({ expect }) => {
        expect(isValid(Temporal.PlainYearMonth.from("2024-06"))).toBe(true);
    });

    it("returns true for PlainMonthDay", ({ expect }) => {
        expect(isValid(Temporal.PlainMonthDay.from("06-15"))).toBe(true);
    });

    it("returns false for a plain string", ({ expect }) => {
        expect(isValid("2024-06-15")).toBe(false);
    });

    it("returns false for a number", ({ expect }) => {
        expect(isValid(1718409600000)).toBe(false);
    });

    it("returns false for null", ({ expect }) => {
        expect(isValid(null)).toBe(false);
    });

    it("returns false for undefined", ({ expect }) => {
        expect(isValid(undefined)).toBe(false);
    });

    it("returns false for a Date object", ({ expect }) => {
        expect(isValid(new Date())).toBe(false);
    });

    it("returns false for a plain object", ({ expect }) => {
        expect(isValid({ year: 2024, month: 6, day: 15 })).toBe(false);
    });
});
