import { describe } from "vitest";
import { closestIndexTo } from "./index.js";

describe("closestIndexTo", (it) => {
    it("returns the index of the closest date", ({ expect }) => {
        const target = Temporal.PlainDate.from("2024-01-15");
        const dates = [
            Temporal.PlainDate.from("2024-01-10"),
            Temporal.PlainDate.from("2024-01-14"),
            Temporal.PlainDate.from("2024-01-20"),
        ];
        const result = closestIndexTo(target, dates);
        expect(result).toBe(1);
    });

    it("returns -1 for an empty array", ({ expect }) => {
        const target = Temporal.PlainDate.from("2024-01-15");
        const result = closestIndexTo(target, []);
        expect(result).toBe(-1);
    });

    it("returns the first index when equidistant", ({ expect }) => {
        const target = Temporal.PlainDate.from("2024-01-15");
        const dates = [
            Temporal.PlainDate.from("2024-01-13"), // 2 days before
            Temporal.PlainDate.from("2024-01-17"), // 2 days after
        ];
        const result = closestIndexTo(target, dates);
        expect(result).toBe(0);
    });

    it("works with multiple dates and picks the correct index", ({
        expect,
    }) => {
        const target = Temporal.PlainDate.from("2024-06-15");
        const dates = [
            Temporal.PlainDate.from("2024-01-01"),
            Temporal.PlainDate.from("2024-03-15"),
            Temporal.PlainDate.from("2024-06-10"),
            Temporal.PlainDate.from("2024-09-01"),
            Temporal.PlainDate.from("2024-12-31"),
        ];
        const result = closestIndexTo(target, dates);
        expect(result).toBe(2); // 2024-06-10 is closest (5 days away)
    });

    it("works with ZonedDateTime", ({ expect }) => {
        const target = Temporal.ZonedDateTime.from("2024-01-15T12:00:00[UTC]");
        const dates = [
            Temporal.ZonedDateTime.from("2024-01-10T12:00:00[UTC]"),
            Temporal.ZonedDateTime.from("2024-01-16T12:00:00[UTC]"),
        ];
        const result = closestIndexTo(target, dates);
        expect(result).toBe(1);
    });

    it("returns the index of the closest Instant", ({ expect }) => {
        const target = Temporal.Instant.from("2024-01-15T12:00:00Z");
        const dates = [
            Temporal.Instant.from("2024-01-15T10:00:00Z"), // 2h before
            Temporal.Instant.from("2024-01-15T11:30:00Z"), // 30min before
            Temporal.Instant.from("2024-01-15T15:00:00Z"), // 3h after
        ];
        const result = closestIndexTo(target, dates);
        expect(result).toBe(1);
    });

    it("throws TypeError for Instant target with PlainDate array", ({
        expect,
    }) => {
        const target = Temporal.Instant.from("2024-01-15T12:00:00Z");
        const dates: Temporal.Instant[] = [
            Temporal.PlainDate.from(
                "2024-01-14",
            ) as unknown as Temporal.Instant,
        ];
        expect(() => closestIndexTo(target, dates)).toThrow(TypeError);
    });
});
