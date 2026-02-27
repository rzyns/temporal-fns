import { describe } from "vitest";
import { getDay } from "./index.js";

describe("getDay", (it) => {
    it("returns the day of week of a PlainDate", ({ expect }) => {
        // 2024-06-15 is a Saturday
        const date = Temporal.PlainDate.from("2024-06-15");
        expect(getDay(date)).toBe(6);
    });

    it("returns the day of week of a PlainDateTime", ({ expect }) => {
        // 2024-01-01 is a Monday
        const dt = Temporal.PlainDateTime.from("2024-01-01T10:30:00");
        expect(getDay(dt)).toBe(1);
    });

    it("returns the day of week of a ZonedDateTime", ({ expect }) => {
        // 2024-06-16 is a Sunday
        const zdt = Temporal.ZonedDateTime.from(
            "2024-06-16T10:30:00[America/New_York]",
        );
        expect(getDay(zdt)).toBe(7);
    });

    it("returns 1 for Monday", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-01-01");
        expect(getDay(date)).toBe(1);
    });

    it("returns 7 for Sunday", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-01-07");
        expect(getDay(date)).toBe(7);
    });
});
