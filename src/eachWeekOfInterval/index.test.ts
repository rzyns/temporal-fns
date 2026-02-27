import { describe } from "vitest";
import { eachWeekOfInterval } from "./index.js";

describe("eachWeekOfInterval", (it) => {
    it("returns each week start in the interval (default Monday start)", ({
        expect,
    }) => {
        // 2024-01-01 is a Monday
        const interval = {
            start: Temporal.PlainDate.from("2024-01-03"), // Wednesday
            end: Temporal.PlainDate.from("2024-01-22"), // Monday
        };
        const result = eachWeekOfInterval(interval);
        expect(result.map((d) => d.toString())).toEqual([
            "2024-01-01", // Mon (startOfWeek of Wed Jan 3)
            "2024-01-08", // Mon
            "2024-01-15", // Mon
            "2024-01-22", // Mon
        ]);
    });

    it("returns each week start with Sunday as week start", ({ expect }) => {
        // 2024-01-07 is a Sunday
        const interval = {
            start: Temporal.PlainDate.from("2024-01-03"), // Wednesday
            end: Temporal.PlainDate.from("2024-01-20"), // Saturday
        };
        const result = eachWeekOfInterval(interval, { weekStartsOn: 7 });
        expect(result.map((d) => d.toString())).toEqual([
            "2023-12-31", // Sun (startOfWeek of Wed Jan 3)
            "2024-01-07", // Sun
            "2024-01-14", // Sun
        ]);
    });

    it("returns single week when interval is within one week", ({ expect }) => {
        const interval = {
            start: Temporal.PlainDate.from("2024-01-02"), // Tuesday
            end: Temporal.PlainDate.from("2024-01-04"), // Thursday
        };
        const result = eachWeekOfInterval(interval);
        expect(result).toHaveLength(1);
        expect(result[0].toString()).toBe("2024-01-01"); // Monday
    });

    it("returns empty array when start is after end", ({ expect }) => {
        const interval = {
            start: Temporal.PlainDate.from("2024-01-20"),
            end: Temporal.PlainDate.from("2024-01-01"),
        };
        const result = eachWeekOfInterval(interval);
        expect(result).toHaveLength(0);
    });

    it("handles month boundary crossings", ({ expect }) => {
        const interval = {
            start: Temporal.PlainDate.from("2024-01-29"), // Monday
            end: Temporal.PlainDate.from("2024-02-12"), // Monday
        };
        const result = eachWeekOfInterval(interval);
        expect(result.map((d) => d.toString())).toEqual([
            "2024-01-29", // Mon
            "2024-02-05", // Mon
            "2024-02-12", // Mon
        ]);
    });
});
