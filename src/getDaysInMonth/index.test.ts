import { getDaysInMonth } from "./index.js";

describe("getDaysInMonth", () => {
    it("returns 31 for January", () => {
        const date = Temporal.PlainDate.from("2024-01-15");
        expect(getDaysInMonth(date)).toBe(31);
    });

    it("returns 29 for February in a leap year", () => {
        const date = Temporal.PlainDate.from("2024-02-15");
        expect(getDaysInMonth(date)).toBe(29);
    });

    it("returns 28 for February in a non-leap year", () => {
        const date = Temporal.PlainDate.from("2023-02-15");
        expect(getDaysInMonth(date)).toBe(28);
    });

    it("works with PlainDateTime", () => {
        const dt = Temporal.PlainDateTime.from("2024-04-10T12:00:00");
        expect(getDaysInMonth(dt)).toBe(30);
    });

    it("works with ZonedDateTime", () => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-03-15T10:30:00[America/New_York]",
        );
        expect(getDaysInMonth(zdt)).toBe(31);
    });
});
