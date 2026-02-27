import { describe } from "vitest";
import { differenceInCalendarMonths } from "./index.js";

describe("differenceInCalendarMonths", (it) => {
    it("returns the number of calendar months between two dates", ({
        expect,
    }) => {
        const left = Temporal.PlainDate.from("2024-06-15");
        const right = Temporal.PlainDate.from("2024-01-15");
        expect(differenceInCalendarMonths(left, right)).toBe(5);
    });

    it("returns a negative number when dateLeft is before dateRight", ({
        expect,
    }) => {
        const left = Temporal.PlainDate.from("2024-01-15");
        const right = Temporal.PlainDate.from("2024-06-15");
        expect(differenceInCalendarMonths(left, right)).toBe(-5);
    });

    it("returns 0 for the same date", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-06-15");
        expect(differenceInCalendarMonths(date, date)).toBe(0);
    });

    it("truncates partial months", ({ expect }) => {
        const left = Temporal.PlainDate.from("2024-02-10");
        const right = Temporal.PlainDate.from("2024-01-20");
        expect(differenceInCalendarMonths(left, right)).toBe(0);
    });

    it("works with ZonedDateTime inputs", ({ expect }) => {
        const left = Temporal.ZonedDateTime.from(
            "2024-06-15T10:00:00[Europe/London]",
        );
        const right = Temporal.ZonedDateTime.from(
            "2024-01-15T10:00:00[Europe/London]",
        );
        expect(differenceInCalendarMonths(left, right)).toBe(5);
    });
});
