import { describe } from "vitest";
import { differenceInCalendarYears } from "./index.js";

describe("differenceInCalendarYears", (it) => {
    it("returns the number of calendar years between two dates", ({
        expect,
    }) => {
        const left = Temporal.PlainDate.from("2027-06-15");
        const right = Temporal.PlainDate.from("2024-06-15");
        expect(differenceInCalendarYears(left, right)).toBe(3);
    });

    it("returns a negative number when dateLeft is before dateRight", ({
        expect,
    }) => {
        const left = Temporal.PlainDate.from("2020-01-01");
        const right = Temporal.PlainDate.from("2024-01-01");
        expect(differenceInCalendarYears(left, right)).toBe(-4);
    });

    it("returns 0 for the same year", ({ expect }) => {
        const left = Temporal.PlainDate.from("2024-12-31");
        const right = Temporal.PlainDate.from("2024-01-01");
        expect(differenceInCalendarYears(left, right)).toBe(0);
    });

    it("truncates partial years", ({ expect }) => {
        const left = Temporal.PlainDate.from("2025-03-01");
        const right = Temporal.PlainDate.from("2024-06-01");
        expect(differenceInCalendarYears(left, right)).toBe(0);
    });

    it("works with ZonedDateTime inputs", ({ expect }) => {
        const left = Temporal.ZonedDateTime.from(
            "2026-03-15T10:00:00[America/Chicago]",
        );
        const right = Temporal.ZonedDateTime.from(
            "2024-03-15T10:00:00[America/Chicago]",
        );
        expect(differenceInCalendarYears(left, right)).toBe(2);
    });
});
