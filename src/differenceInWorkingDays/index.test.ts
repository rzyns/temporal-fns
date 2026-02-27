import { describe } from "vitest";
import { differenceInWorkingDays } from "./index.js";

describe("differenceInWorkingDays", (it) => {
    it("counts working days between two dates", ({ expect }) => {
        const monday = Temporal.PlainDate.from("2024-01-15");
        const friday = Temporal.PlainDate.from("2024-01-19");
        expect(differenceInWorkingDays(friday, monday)).toBe(4);
    });

    it("returns negative when left is before right", ({ expect }) => {
        const monday = Temporal.PlainDate.from("2024-01-15");
        const friday = Temporal.PlainDate.from("2024-01-19");
        expect(differenceInWorkingDays(monday, friday)).toBe(-4);
    });

    it("returns 0 for same date", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-01-15");
        expect(differenceInWorkingDays(date, date)).toBe(0);
    });

    it("skips weekends", ({ expect }) => {
        const friday = Temporal.PlainDate.from("2024-01-12");
        const nextMonday = Temporal.PlainDate.from("2024-01-15");
        expect(differenceInWorkingDays(nextMonday, friday)).toBe(1);
    });
});
