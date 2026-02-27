import { describe } from "vitest";
import { differenceInMonths } from "./index.js";

describe("differenceInMonths", (it) => {
    it("returns the number of full months between two dates", ({ expect }) => {
        const left = Temporal.PlainDate.from("2024-04-15");
        const right = Temporal.PlainDate.from("2024-01-15");
        expect(differenceInMonths(left, right)).toBe(3);
    });

    it("returns a negative number when dateLeft is before dateRight", ({
        expect,
    }) => {
        const left = Temporal.PlainDate.from("2024-01-15");
        const right = Temporal.PlainDate.from("2024-04-15");
        expect(differenceInMonths(left, right)).toBe(-3);
    });

    it("returns 0 for the same date", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-03-15");
        expect(differenceInMonths(date, date)).toBe(0);
    });

    it("handles cross-year boundaries", ({ expect }) => {
        const left = Temporal.PlainDate.from("2025-03-01");
        const right = Temporal.PlainDate.from("2024-11-01");
        expect(differenceInMonths(left, right)).toBe(4);
    });

    it("works with PlainDateTime inputs", ({ expect }) => {
        const left = Temporal.PlainDateTime.from("2024-07-10T12:00:00");
        const right = Temporal.PlainDateTime.from("2024-01-10T08:00:00");
        expect(differenceInMonths(left, right)).toBe(6);
    });
});
