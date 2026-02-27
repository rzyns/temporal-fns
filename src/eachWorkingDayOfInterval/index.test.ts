import { describe } from "vitest";
import { eachWorkingDayOfInterval } from "./index.js";

describe("eachWorkingDayOfInterval", (it) => {
    it("returns only working days in the interval", ({ expect }) => {
        const interval = {
            start: Temporal.PlainDate.from("2024-01-15"), // Monday
            end: Temporal.PlainDate.from("2024-01-21"), // Sunday
        };
        const result = eachWorkingDayOfInterval(interval);
        expect(result.map((d) => d.toString())).toEqual([
            "2024-01-15",
            "2024-01-16",
            "2024-01-17",
            "2024-01-18",
            "2024-01-19",
        ]);
    });

    it("respects custom working days", ({ expect }) => {
        const interval = {
            start: Temporal.PlainDate.from("2024-01-15"),
            end: Temporal.PlainDate.from("2024-01-21"),
        };
        const result = eachWorkingDayOfInterval(interval, {
            workingDays: [1, 3, 5],
        });
        expect(result.map((d) => d.toString())).toEqual([
            "2024-01-15",
            "2024-01-17",
            "2024-01-19",
        ]);
    });

    it("returns empty array when no working days in range", ({ expect }) => {
        const interval = {
            start: Temporal.PlainDate.from("2024-01-13"), // Saturday
            end: Temporal.PlainDate.from("2024-01-14"), // Sunday
        };
        const result = eachWorkingDayOfInterval(interval);
        expect(result).toHaveLength(0);
    });
});
