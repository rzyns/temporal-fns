import { describe } from "vitest";
import { differenceInCalendarQuarters } from "./index.js";

describe("differenceInCalendarQuarters", (it) => {
    it("returns the number of calendar quarters between two dates", ({
        expect,
    }) => {
        const left = Temporal.PlainDate.from("2024-07-01");
        const right = Temporal.PlainDate.from("2024-01-01");
        expect(differenceInCalendarQuarters(left, right)).toBe(2);
    });

    it("returns a negative number when dateLeft is before dateRight", ({
        expect,
    }) => {
        const left = Temporal.PlainDate.from("2024-01-01");
        const right = Temporal.PlainDate.from("2024-07-01");
        expect(differenceInCalendarQuarters(left, right)).toBe(-2);
    });

    it("returns 0 for dates in the same quarter", ({ expect }) => {
        const left = Temporal.PlainDate.from("2024-03-31");
        const right = Temporal.PlainDate.from("2024-01-01");
        expect(differenceInCalendarQuarters(left, right)).toBe(0);
    });

    it("handles cross-year boundaries", ({ expect }) => {
        const left = Temporal.PlainDate.from("2025-04-01");
        const right = Temporal.PlainDate.from("2024-10-01");
        expect(differenceInCalendarQuarters(left, right)).toBe(2);
    });

    it("works with PlainDateTime inputs", ({ expect }) => {
        const left = Temporal.PlainDateTime.from("2024-10-15T12:00:00");
        const right = Temporal.PlainDateTime.from("2024-01-15T12:00:00");
        expect(differenceInCalendarQuarters(left, right)).toBe(3);
    });
});
