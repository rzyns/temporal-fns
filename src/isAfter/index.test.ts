import { describe } from "vitest";
import { isAfter } from "./index.js";

describe("isAfter", (it) => {
    it("returns true when the first date is after the second", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-06-20");
        const dateToCompare = Temporal.PlainDate.from("2024-01-15");
        expect(isAfter(date, dateToCompare)).toBe(true);
    });

    it("returns false when the first date is before the second", ({
        expect,
    }) => {
        const date = Temporal.PlainDate.from("2024-01-15");
        const dateToCompare = Temporal.PlainDate.from("2024-06-20");
        expect(isAfter(date, dateToCompare)).toBe(false);
    });

    it("returns false when dates are equal", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-01-15");
        const dateToCompare = Temporal.PlainDate.from("2024-01-15");
        expect(isAfter(date, dateToCompare)).toBe(false);
    });

    it("works with PlainDateTime", ({ expect }) => {
        const date = Temporal.PlainDateTime.from("2024-01-15T16:30:00");
        const dateToCompare = Temporal.PlainDateTime.from(
            "2024-01-15T08:00:00",
        );
        expect(isAfter(date, dateToCompare)).toBe(true);
    });

    it("works with ZonedDateTime", ({ expect }) => {
        const date = Temporal.ZonedDateTime.from(
            "2024-06-20T12:00:00[America/New_York]",
        );
        const dateToCompare = Temporal.ZonedDateTime.from(
            "2024-01-15T12:00:00[America/New_York]",
        );
        expect(isAfter(date, dateToCompare)).toBe(true);
    });
});
