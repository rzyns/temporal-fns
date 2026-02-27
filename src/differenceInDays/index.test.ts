import { describe } from "vitest";
import { differenceInDays } from "./index.js";

describe("differenceInDays", (it) => {
    it("returns the number of days between two PlainDates", ({ expect }) => {
        const left = Temporal.PlainDate.from("2024-01-20");
        const right = Temporal.PlainDate.from("2024-01-10");
        expect(differenceInDays(left, right)).toBe(10);
    });

    it("returns a negative number when dateLeft is before dateRight", ({
        expect,
    }) => {
        const left = Temporal.PlainDate.from("2024-01-01");
        const right = Temporal.PlainDate.from("2024-01-15");
        expect(differenceInDays(left, right)).toBe(-14);
    });

    it("returns 0 for the same date", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-06-15");
        expect(differenceInDays(date, date)).toBe(0);
    });

    it("handles cross-year boundaries", ({ expect }) => {
        const left = Temporal.PlainDate.from("2025-01-01");
        const right = Temporal.PlainDate.from("2024-12-30");
        expect(differenceInDays(left, right)).toBe(2);
    });

    it("works with PlainDateTime inputs", ({ expect }) => {
        const left = Temporal.PlainDateTime.from("2024-03-20T23:59:59");
        const right = Temporal.PlainDateTime.from("2024-03-10T00:00:00");
        expect(differenceInDays(left, right)).toBe(10);
    });
});
