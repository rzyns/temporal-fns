import { describe } from "vitest";
import { differenceInMinutes } from "./index.js";

describe("differenceInMinutes", (it) => {
    it("returns the number of minutes between two PlainDateTimes", ({
        expect,
    }) => {
        const left = Temporal.PlainDateTime.from("2024-01-15T14:30:00");
        const right = Temporal.PlainDateTime.from("2024-01-15T14:00:00");
        expect(differenceInMinutes(left, right)).toBe(30);
    });

    it("returns a negative number when dateLeft is before dateRight", ({
        expect,
    }) => {
        const left = Temporal.PlainDateTime.from("2024-01-15T14:00:00");
        const right = Temporal.PlainDateTime.from("2024-01-15T14:45:00");
        expect(differenceInMinutes(left, right)).toBe(-45);
    });

    it("returns 0 for the same datetime", ({ expect }) => {
        const dt = Temporal.PlainDateTime.from("2024-01-15T12:30:00");
        expect(differenceInMinutes(dt, dt)).toBe(0);
    });

    it("truncates partial minutes", ({ expect }) => {
        const left = Temporal.PlainDateTime.from("2024-01-15T14:02:45");
        const right = Temporal.PlainDateTime.from("2024-01-15T14:00:00");
        expect(differenceInMinutes(left, right)).toBe(2);
    });

    it("works with ZonedDateTime inputs using epoch-based calculation", ({
        expect,
    }) => {
        const left = Temporal.ZonedDateTime.from(
            "2024-01-15T15:30:00[America/New_York]",
        );
        const right = Temporal.ZonedDateTime.from(
            "2024-01-15T14:00:00[America/New_York]",
        );
        expect(differenceInMinutes(left, right)).toBe(90);
    });
});
