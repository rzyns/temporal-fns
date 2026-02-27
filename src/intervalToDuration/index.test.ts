import { describe } from "vitest";
import { intervalToDuration } from "./index.js";

describe("intervalToDuration", (it) => {
    it("returns the duration between two dates", ({ expect }) => {
        const interval = {
            start: Temporal.PlainDate.from("2024-01-01"),
            end: Temporal.PlainDate.from("2024-01-10"),
        };
        const result = intervalToDuration(interval);
        expect(result.days).toBe(9);
    });

    it("returns zero duration for same start and end", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-06-15");
        const result = intervalToDuration({ start: date, end: date });
        expect(result.total("days")).toBe(0);
    });

    it("handles month boundaries correctly", ({ expect }) => {
        const interval = {
            start: Temporal.PlainDate.from("2024-01-15"),
            end: Temporal.PlainDate.from("2024-03-15"),
        };
        const result = intervalToDuration(interval);
        expect(result.months).toBe(2);
        expect(result.days).toBe(0);
    });

    it("handles year boundaries correctly", ({ expect }) => {
        const interval = {
            start: Temporal.PlainDate.from("2023-06-01"),
            end: Temporal.PlainDate.from("2025-06-01"),
        };
        const result = intervalToDuration(interval);
        expect(result.years).toBe(2);
    });

    it("works with PlainDateTime by converting to PlainDate", ({ expect }) => {
        const interval = {
            start: Temporal.PlainDateTime.from("2024-01-01T08:00:00"),
            end: Temporal.PlainDateTime.from("2024-01-15T17:00:00"),
        };
        const result = intervalToDuration(interval);
        expect(result.days).toBe(14);
    });
});
