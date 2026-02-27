import { describe } from "vitest";
import { eachMonthOfInterval } from "./index.js";

describe("eachMonthOfInterval", (it) => {
    it("returns each month start in the interval", ({ expect }) => {
        const interval = {
            start: Temporal.PlainDate.from("2024-01-15"),
            end: Temporal.PlainDate.from("2024-04-10"),
        };
        const result = eachMonthOfInterval(interval);
        expect(result.map((d) => d.toString())).toEqual([
            "2024-01-01",
            "2024-02-01",
            "2024-03-01",
            "2024-04-01",
        ]);
    });

    it("returns single month when start and end are in the same month", ({
        expect,
    }) => {
        const interval = {
            start: Temporal.PlainDate.from("2024-03-05"),
            end: Temporal.PlainDate.from("2024-03-25"),
        };
        const result = eachMonthOfInterval(interval);
        expect(result).toHaveLength(1);
        expect(result[0]?.toString()).toBe("2024-03-01");
    });

    it("returns empty array when start is after end", ({ expect }) => {
        const interval = {
            start: Temporal.PlainDate.from("2024-06-01"),
            end: Temporal.PlainDate.from("2024-01-01"),
        };
        const result = eachMonthOfInterval(interval);
        expect(result).toHaveLength(0);
    });

    it("handles year boundary crossings", ({ expect }) => {
        const interval = {
            start: Temporal.PlainDate.from("2023-11-10"),
            end: Temporal.PlainDate.from("2024-02-15"),
        };
        const result = eachMonthOfInterval(interval);
        expect(result.map((d) => d.toString())).toEqual([
            "2023-11-01",
            "2023-12-01",
            "2024-01-01",
            "2024-02-01",
        ]);
    });

    it("includes month whose start equals interval end", ({ expect }) => {
        const interval = {
            start: Temporal.PlainDate.from("2024-01-15"),
            end: Temporal.PlainDate.from("2024-03-01"),
        };
        const result = eachMonthOfInterval(interval);
        expect(result.map((d) => d.toString())).toEqual([
            "2024-01-01",
            "2024-02-01",
            "2024-03-01",
        ]);
    });
});
