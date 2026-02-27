import { differenceInCalendarDays } from "./index.js";

describe("differenceInCalendarDays", () => {
    it("returns the number of calendar days between two PlainDates", () => {
        const left = Temporal.PlainDate.from("2024-01-15");
        const right = Temporal.PlainDate.from("2024-01-10");
        expect(differenceInCalendarDays(left, right)).toBe(5);
    });

    it("returns a negative number when dateLeft is before dateRight", () => {
        const left = Temporal.PlainDate.from("2024-01-10");
        const right = Temporal.PlainDate.from("2024-01-15");
        expect(differenceInCalendarDays(left, right)).toBe(-5);
    });

    it("returns 0 when both dates are the same", () => {
        const date = Temporal.PlainDate.from("2024-06-15");
        expect(differenceInCalendarDays(date, date)).toBe(0);
    });

    it("handles cross-month boundaries", () => {
        const left = Temporal.PlainDate.from("2024-02-02");
        const right = Temporal.PlainDate.from("2024-01-28");
        expect(differenceInCalendarDays(left, right)).toBe(5);
    });

    it("works with PlainDateTime inputs", () => {
        const left = Temporal.PlainDateTime.from("2024-03-15T14:30:00");
        const right = Temporal.PlainDateTime.from("2024-03-10T08:00:00");
        expect(differenceInCalendarDays(left, right)).toBe(5);
    });

    it("works with ZonedDateTime inputs", () => {
        const left = Temporal.ZonedDateTime.from(
            "2024-03-15T10:00:00[America/New_York]",
        );
        const right = Temporal.ZonedDateTime.from(
            "2024-03-10T10:00:00[America/New_York]",
        );
        expect(differenceInCalendarDays(left, right)).toBe(5);
    });
});
