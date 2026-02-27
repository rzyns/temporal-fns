import { describe } from "vitest";
import { compareAsc } from "./index.js";

describe("compareAsc", (it) => {
    describe("PlainDate comparisons", (it) => {
        it("returns -1 when left date is before right date", ({ expect }) => {
            const left = Temporal.PlainDate.from("2024-01-15");
            const right = Temporal.PlainDate.from("2024-06-20");
            expect(compareAsc(left, right)).toBe(-1);
        });

        it("returns 1 when left date is after right date", ({ expect }) => {
            const left = Temporal.PlainDate.from("2024-06-20");
            const right = Temporal.PlainDate.from("2024-01-15");
            expect(compareAsc(left, right)).toBe(1);
        });

        it("returns 0 when dates are equal", ({ expect }) => {
            const left = Temporal.PlainDate.from("2024-01-15");
            const right = Temporal.PlainDate.from("2024-01-15");
            expect(compareAsc(left, right)).toBe(0);
        });
    });

    describe("PlainDateTime comparisons", (it) => {
        it("returns -1 when left datetime is before right datetime", ({
            expect,
        }) => {
            const left = Temporal.PlainDateTime.from("2024-01-15T08:00:00");
            const right = Temporal.PlainDateTime.from("2024-01-15T16:30:00");
            expect(compareAsc(left, right)).toBe(-1);
        });

        it("returns 1 when left datetime is after right datetime", ({
            expect,
        }) => {
            const left = Temporal.PlainDateTime.from("2024-01-15T16:30:00");
            const right = Temporal.PlainDateTime.from("2024-01-15T08:00:00");
            expect(compareAsc(left, right)).toBe(1);
        });

        it("returns 0 when datetimes are equal", ({ expect }) => {
            const left = Temporal.PlainDateTime.from("2024-01-15T10:30:00");
            const right = Temporal.PlainDateTime.from("2024-01-15T10:30:00");
            expect(compareAsc(left, right)).toBe(0);
        });
    });

    describe("ZonedDateTime comparisons", (it) => {
        it("compares using wall-clock date/time", ({ expect }) => {
            const left = Temporal.ZonedDateTime.from(
                "2024-01-15T08:00:00[America/New_York]",
            );
            const right = Temporal.ZonedDateTime.from(
                "2024-01-15T16:00:00[America/New_York]",
            );
            expect(compareAsc(left, right)).toBe(-1);
        });

        it("returns 0 for equal wall-clock times", ({ expect }) => {
            const left = Temporal.ZonedDateTime.from(
                "2024-06-20T12:00:00[America/New_York]",
            );
            const right = Temporal.ZonedDateTime.from(
                "2024-06-20T12:00:00[America/New_York]",
            );
            expect(compareAsc(left, right)).toBe(0);
        });
    });

    describe("mixed type comparisons", (it) => {
        it("compares PlainDate with PlainDateTime by date parts", ({
            expect,
        }) => {
            const date = Temporal.PlainDate.from("2024-01-15");
            const datetime = Temporal.PlainDateTime.from("2024-06-20T10:00:00");
            expect(compareAsc(date, datetime)).toBe(-1);
        });

        it("returns 0 for PlainDate and PlainDateTime on the same day when only date parts compared", ({
            expect,
        }) => {
            const date = Temporal.PlainDate.from("2024-01-15");
            const datetime = Temporal.PlainDateTime.from("2024-01-15T10:00:00");
            expect(compareAsc(date, datetime)).toBe(0);
        });

        it("compares PlainDate with ZonedDateTime", ({ expect }) => {
            const date = Temporal.PlainDate.from("2024-06-20");
            const zdt = Temporal.ZonedDateTime.from(
                "2024-01-15T10:00:00[America/New_York]",
            );
            expect(compareAsc(date, zdt)).toBe(1);
        });

        it("compares PlainDateTime with ZonedDateTime by wall-clock time", ({
            expect,
        }) => {
            const pdt = Temporal.PlainDateTime.from("2024-01-15T08:00:00");
            const zdt = Temporal.ZonedDateTime.from(
                "2024-01-15T16:00:00[America/New_York]",
            );
            expect(compareAsc(pdt, zdt)).toBe(-1);
        });
    });
});
