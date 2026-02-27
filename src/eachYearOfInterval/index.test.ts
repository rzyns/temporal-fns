import { describe } from "vitest";
import { eachYearOfInterval } from "./index.js";

describe("eachYearOfInterval", (it) => {
    it("returns each year start in the interval", ({ expect }) => {
        const interval = {
            start: Temporal.PlainDate.from("2020-06-15"),
            end: Temporal.PlainDate.from("2024-03-10"),
        };
        const result = eachYearOfInterval(interval);
        expect(result.map((d) => d.toString())).toEqual([
            "2020-01-01",
            "2021-01-01",
            "2022-01-01",
            "2023-01-01",
            "2024-01-01",
        ]);
    });

    it("returns single year when start and end are in the same year", ({
        expect,
    }) => {
        const interval = {
            start: Temporal.PlainDate.from("2024-03-01"),
            end: Temporal.PlainDate.from("2024-09-30"),
        };
        const result = eachYearOfInterval(interval);
        expect(result).toHaveLength(1);
        expect(result[0]?.toString()).toBe("2024-01-01");
    });

    it("returns empty array when start is after end", ({ expect }) => {
        const interval = {
            start: Temporal.PlainDate.from("2025-01-01"),
            end: Temporal.PlainDate.from("2020-01-01"),
        };
        const result = eachYearOfInterval(interval);
        expect(result).toHaveLength(0);
    });

    it("includes year whose start equals interval end", ({ expect }) => {
        const interval = {
            start: Temporal.PlainDate.from("2022-06-15"),
            end: Temporal.PlainDate.from("2024-01-01"),
        };
        const result = eachYearOfInterval(interval);
        expect(result.map((d) => d.toString())).toEqual([
            "2022-01-01",
            "2023-01-01",
            "2024-01-01",
        ]);
    });
});
