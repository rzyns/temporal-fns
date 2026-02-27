import { compareAsc } from "./index.js";

describe("compareAsc", () => {
    describe("PlainDate comparisons", () => {
        it("returns -1 when left date is before right date", () => {
            const left = Temporal.PlainDate.from("2024-01-15");
            const right = Temporal.PlainDate.from("2024-06-20");
            expect(compareAsc(left, right)).toBe(-1);
        });

        it("returns 1 when left date is after right date", () => {
            const left = Temporal.PlainDate.from("2024-06-20");
            const right = Temporal.PlainDate.from("2024-01-15");
            expect(compareAsc(left, right)).toBe(1);
        });

        it("returns 0 when dates are equal", () => {
            const left = Temporal.PlainDate.from("2024-01-15");
            const right = Temporal.PlainDate.from("2024-01-15");
            expect(compareAsc(left, right)).toBe(0);
        });
    });

    describe("PlainDateTime comparisons", () => {
        it("returns -1 when left datetime is before right datetime", () => {
            const left = Temporal.PlainDateTime.from("2024-01-15T08:00:00");
            const right = Temporal.PlainDateTime.from("2024-01-15T16:30:00");
            expect(compareAsc(left, right)).toBe(-1);
        });

        it("returns 1 when left datetime is after right datetime", () => {
            const left = Temporal.PlainDateTime.from("2024-01-15T16:30:00");
            const right = Temporal.PlainDateTime.from("2024-01-15T08:00:00");
            expect(compareAsc(left, right)).toBe(1);
        });

        it("returns 0 when datetimes are equal", () => {
            const left = Temporal.PlainDateTime.from("2024-01-15T10:30:00");
            const right = Temporal.PlainDateTime.from("2024-01-15T10:30:00");
            expect(compareAsc(left, right)).toBe(0);
        });
    });

    describe("ZonedDateTime comparisons", () => {
        it("compares using wall-clock date/time", () => {
            const left = Temporal.ZonedDateTime.from(
                "2024-01-15T08:00:00[America/New_York]",
            );
            const right = Temporal.ZonedDateTime.from(
                "2024-01-15T16:00:00[America/New_York]",
            );
            expect(compareAsc(left, right)).toBe(-1);
        });

        it("returns 0 for equal wall-clock times", () => {
            const left = Temporal.ZonedDateTime.from(
                "2024-06-20T12:00:00[America/New_York]",
            );
            const right = Temporal.ZonedDateTime.from(
                "2024-06-20T12:00:00[America/New_York]",
            );
            expect(compareAsc(left, right)).toBe(0);
        });
    });

    describe("mixed type comparisons", () => {
        it("compares PlainDate with PlainDateTime by date parts", () => {
            const date = Temporal.PlainDate.from("2024-01-15");
            const datetime = Temporal.PlainDateTime.from("2024-06-20T10:00:00");
            expect(compareAsc(date, datetime)).toBe(-1);
        });

        it("returns 0 for PlainDate and PlainDateTime on the same day when only date parts compared", () => {
            const date = Temporal.PlainDate.from("2024-01-15");
            const datetime = Temporal.PlainDateTime.from("2024-01-15T10:00:00");
            expect(compareAsc(date, datetime)).toBe(0);
        });

        it("compares PlainDate with ZonedDateTime", () => {
            const date = Temporal.PlainDate.from("2024-06-20");
            const zdt = Temporal.ZonedDateTime.from(
                "2024-01-15T10:00:00[America/New_York]",
            );
            expect(compareAsc(date, zdt)).toBe(1);
        });

        it("compares PlainDateTime with ZonedDateTime by wall-clock time", () => {
            const pdt = Temporal.PlainDateTime.from("2024-01-15T08:00:00");
            const zdt = Temporal.ZonedDateTime.from(
                "2024-01-15T16:00:00[America/New_York]",
            );
            expect(compareAsc(pdt, zdt)).toBe(-1);
        });
    });
});
