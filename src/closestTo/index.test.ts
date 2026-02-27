import { describe } from "vitest";
import { closestTo } from "./index.js";

describe("closestTo", (it) => {
    it("returns the closest date from an array", ({ expect }) => {
        const target = Temporal.PlainDate.from("2024-01-15");
        const dates = [
            Temporal.PlainDate.from("2024-01-10"),
            Temporal.PlainDate.from("2024-01-14"),
            Temporal.PlainDate.from("2024-01-20"),
        ];
        const result = closestTo(target, dates);
        expect(result?.toString()).toBe("2024-01-14");
    });

    it("returns the first match when equidistant", ({ expect }) => {
        const target = Temporal.PlainDate.from("2024-01-15");
        const dates = [
            Temporal.PlainDate.from("2024-01-13"), // 2 days before
            Temporal.PlainDate.from("2024-01-17"), // 2 days after
        ];
        const result = closestTo(target, dates);
        expect(result?.toString()).toBe("2024-01-13");
    });

    it("returns undefined for an empty array", ({ expect }) => {
        const target = Temporal.PlainDate.from("2024-01-15");
        const result = closestTo(target, []);
        expect(result).toBeUndefined();
    });

    it("works with ZonedDateTime", ({ expect }) => {
        const target = Temporal.ZonedDateTime.from("2024-01-15T12:00:00[UTC]");
        const dates = [
            Temporal.ZonedDateTime.from("2024-01-10T12:00:00[UTC]"),
            Temporal.ZonedDateTime.from("2024-01-16T12:00:00[UTC]"),
        ];
        const result = closestTo(target, dates);
        expect(result?.day).toBe(16);
    });

    it("returns the exact match when present", ({ expect }) => {
        const target = Temporal.PlainDate.from("2024-01-15");
        const dates = [
            Temporal.PlainDate.from("2024-01-10"),
            Temporal.PlainDate.from("2024-01-15"),
            Temporal.PlainDate.from("2024-01-20"),
        ];
        const result = closestTo(target, dates);
        expect(result?.toString()).toBe("2024-01-15");
    });

    it("returns the closest Instant from an array", ({ expect }) => {
        const target = Temporal.Instant.from("2024-01-15T12:00:00Z");
        const dates = [
            Temporal.Instant.from("2024-01-15T10:00:00Z"), // 2h before
            Temporal.Instant.from("2024-01-15T11:30:00Z"), // 30min before
            Temporal.Instant.from("2024-01-15T15:00:00Z"), // 3h after
        ];
        const result = closestTo(target, dates);
        expect(result?.toString()).toBe("2024-01-15T11:30:00Z");
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
        expect(() => closestTo(target, dates)).toThrow(TypeError);
    });
});
