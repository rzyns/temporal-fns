import { describe } from "vitest";
import { isEqual } from "./index.js";

describe("isEqual", (it) => {
    it("returns true when PlainDates are equal", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-01-15");
        const dateToCompare = Temporal.PlainDate.from("2024-01-15");
        expect(isEqual(date, dateToCompare)).toBe(true);
    });

    it("returns false when PlainDates are different", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-01-15");
        const dateToCompare = Temporal.PlainDate.from("2024-06-20");
        expect(isEqual(date, dateToCompare)).toBe(false);
    });

    it("returns true when PlainDateTimes are equal", ({ expect }) => {
        const date = Temporal.PlainDateTime.from("2024-01-15T10:30:00");
        const dateToCompare = Temporal.PlainDateTime.from(
            "2024-01-15T10:30:00",
        );
        expect(isEqual(date, dateToCompare)).toBe(true);
    });

    it("returns false when PlainDateTimes have different times", ({
        expect,
    }) => {
        const date = Temporal.PlainDateTime.from("2024-01-15T08:00:00");
        const dateToCompare = Temporal.PlainDateTime.from(
            "2024-01-15T16:30:00",
        );
        expect(isEqual(date, dateToCompare)).toBe(false);
    });

    it("returns true when ZonedDateTimes have equal wall-clock times", ({
        expect,
    }) => {
        const date = Temporal.ZonedDateTime.from(
            "2024-06-20T12:00:00[America/New_York]",
        );
        const dateToCompare = Temporal.ZonedDateTime.from(
            "2024-06-20T12:00:00[America/New_York]",
        );
        expect(isEqual(date, dateToCompare)).toBe(true);
    });

    it("treats PlainDate and PlainDateTime on the same day as equal (date parts only)", ({
        expect,
    }) => {
        const date = Temporal.PlainDate.from("2024-01-15");
        const dateToCompare = Temporal.PlainDateTime.from(
            "2024-01-15T10:00:00",
        );
        expect(isEqual(date, dateToCompare)).toBe(true);
    });

    it("returns true when Instants are equal", ({ expect }) => {
        const date = Temporal.Instant.from("2024-01-15T12:00:00Z");
        const dateToCompare = Temporal.Instant.from("2024-01-15T12:00:00Z");
        expect(isEqual(date, dateToCompare)).toBe(true);
    });

    it("returns false when Instants are different", ({ expect }) => {
        const date = Temporal.Instant.from("2024-01-15T12:00:00Z");
        const dateToCompare = Temporal.Instant.from("2024-01-15T13:00:00Z");
        expect(isEqual(date, dateToCompare)).toBe(false);
    });

    it("compares Instant with ZonedDateTime representing the same moment", ({
        expect,
    }) => {
        const instant = Temporal.Instant.from("2024-01-15T17:00:00Z");
        const zdt = Temporal.ZonedDateTime.from(
            "2024-01-15T12:00:00-05:00[America/New_York]",
        );
        expect(isEqual(instant, zdt)).toBe(true);
    });

    it("throws TypeError for Instant vs PlainDate", ({ expect }) => {
        const instant = Temporal.Instant.from("2024-01-15T12:00:00Z");
        const plain = Temporal.PlainDate.from("2024-01-15");
        expect(() => isEqual(instant, plain)).toThrow(TypeError);
    });

    it("throws TypeError for Instant vs PlainDateTime", ({ expect }) => {
        const instant = Temporal.Instant.from("2024-01-15T12:00:00Z");
        const pdt = Temporal.PlainDateTime.from("2024-01-15T12:00:00");
        expect(() => isEqual(instant, pdt)).toThrow(TypeError);
    });
});
