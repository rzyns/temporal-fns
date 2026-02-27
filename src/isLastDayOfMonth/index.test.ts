import { describe } from "vitest";
import { isLastDayOfMonth } from "./index.js";

describe("isLastDayOfMonth", (it) => {
    it("returns true for the last day of a 30-day month", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-06-30");
        expect(isLastDayOfMonth(date)).toBe(true);
    });

    it("returns true for the last day of a 31-day month", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-07-31");
        expect(isLastDayOfMonth(date)).toBe(true);
    });

    it("returns true for Feb 29 in a leap year", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-02-29");
        expect(isLastDayOfMonth(date)).toBe(true);
    });

    it("returns true for Feb 28 in a non-leap year", ({ expect }) => {
        const date = Temporal.PlainDate.from("2023-02-28");
        expect(isLastDayOfMonth(date)).toBe(true);
    });

    it("returns false for a non-last day", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-06-15");
        expect(isLastDayOfMonth(date)).toBe(false);
    });

    it("works with PlainDateTime", ({ expect }) => {
        const date = Temporal.PlainDateTime.from("2024-03-31T23:59:59");
        expect(isLastDayOfMonth(date)).toBe(true);
    });

    it("works with ZonedDateTime", ({ expect }) => {
        const date = Temporal.ZonedDateTime.from(
            "2024-12-31T23:59:59[Europe/London]",
        );
        expect(isLastDayOfMonth(date)).toBe(true);
    });
});
