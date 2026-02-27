import { describe } from "vitest";
import { eachDayOfInterval } from "./index.js";

describe("eachDayOfInterval", (it) => {
    it("returns each day in the interval", ({ expect }) => {
        const interval = {
            start: Temporal.PlainDate.from("2024-01-01"),
            end: Temporal.PlainDate.from("2024-01-05"),
        };
        const result = eachDayOfInterval(interval);
        expect(result.map((d) => d.toString())).toEqual([
            "2024-01-01",
            "2024-01-02",
            "2024-01-03",
            "2024-01-04",
            "2024-01-05",
        ]);
    });

    it("returns single day for same start and end", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-06-15");
        const result = eachDayOfInterval({ start: date, end: date });
        expect(result).toHaveLength(1);
        expect(result[0]?.toString()).toBe("2024-06-15");
    });

    it("returns empty array when start is after end", ({ expect }) => {
        const interval = {
            start: Temporal.PlainDate.from("2024-01-05"),
            end: Temporal.PlainDate.from("2024-01-01"),
        };
        const result = eachDayOfInterval(interval);
        expect(result).toHaveLength(0);
    });

    it("handles month boundary crossings", ({ expect }) => {
        const interval = {
            start: Temporal.PlainDate.from("2024-01-30"),
            end: Temporal.PlainDate.from("2024-02-02"),
        };
        const result = eachDayOfInterval(interval);
        expect(result.map((d) => d.toString())).toEqual([
            "2024-01-30",
            "2024-01-31",
            "2024-02-01",
            "2024-02-02",
        ]);
    });
});
