import { differenceInCalendarWeeks } from "./index.js";

describe("differenceInCalendarWeeks", () => {
    it("returns the number of calendar weeks between two dates (Monday start)", () => {
        // 2024-01-15 is Monday, 2024-01-01 is Monday
        const left = Temporal.PlainDate.from("2024-01-15");
        const right = Temporal.PlainDate.from("2024-01-01");
        expect(differenceInCalendarWeeks(left, right)).toBe(2);
    });

    it("returns a negative number when dateLeft is before dateRight", () => {
        const left = Temporal.PlainDate.from("2024-01-01");
        const right = Temporal.PlainDate.from("2024-01-15");
        expect(differenceInCalendarWeeks(left, right)).toBe(-2);
    });

    it("returns 0 for dates in the same week", () => {
        // 2024-01-15 (Mon) and 2024-01-17 (Wed) are in the same week
        const left = Temporal.PlainDate.from("2024-01-17");
        const right = Temporal.PlainDate.from("2024-01-15");
        expect(differenceInCalendarWeeks(left, right)).toBe(0);
    });

    it("respects weekStartsOn option", () => {
        // 2024-01-06 is Saturday, 2024-01-07 is Sunday
        // With Sunday (7) as start, Jan 7 starts a new week
        const left = Temporal.PlainDate.from("2024-01-07");
        const right = Temporal.PlainDate.from("2024-01-06");
        expect(
            differenceInCalendarWeeks(left, right, { weekStartsOn: 7 }),
        ).toBe(1);
    });

    it("works with PlainDateTime inputs", () => {
        const left = Temporal.PlainDateTime.from("2024-01-22T14:30:00");
        const right = Temporal.PlainDateTime.from("2024-01-08T08:00:00");
        expect(differenceInCalendarWeeks(left, right)).toBe(2);
    });
});
