import { describe } from "vitest";
import { getDaysInMonth } from "./index.js";

describe("getDaysInMonth", (it) => {
    it("returns 31 for January", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-01-15");
        expect(getDaysInMonth(date)).toBe(31);
    });

    it("returns 29 for February in a leap year", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-02-15");
        expect(getDaysInMonth(date)).toBe(29);
    });

    it("returns 28 for February in a non-leap year", ({ expect }) => {
        const date = Temporal.PlainDate.from("2023-02-15");
        expect(getDaysInMonth(date)).toBe(28);
    });

    it("works with PlainDateTime", ({ expect }) => {
        const dt = Temporal.PlainDateTime.from("2024-04-10T12:00:00");
        expect(getDaysInMonth(dt)).toBe(30);
    });

    it("works with ZonedDateTime", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-03-15T10:30:00[America/New_York]",
        );
        expect(getDaysInMonth(zdt)).toBe(31);
    });
});
