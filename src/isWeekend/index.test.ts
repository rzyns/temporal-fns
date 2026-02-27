import { isWeekend } from "./index.js";

describe("isWeekend", () => {
    it("returns true for Saturday", () => {
        const date = Temporal.PlainDate.from("2024-06-15"); // Saturday
        expect(isWeekend(date)).toBe(true);
    });

    it("returns true for Sunday", () => {
        const date = Temporal.PlainDate.from("2024-06-16"); // Sunday
        expect(isWeekend(date)).toBe(true);
    });

    it("returns false for a weekday", () => {
        const date = Temporal.PlainDate.from("2024-06-14"); // Friday
        expect(isWeekend(date)).toBe(false);
    });

    it("returns false for Monday", () => {
        const date = Temporal.PlainDate.from("2024-06-10"); // Monday
        expect(isWeekend(date)).toBe(false);
    });

    it("works with PlainDateTime", () => {
        const date = Temporal.PlainDateTime.from("2024-06-15T10:00:00"); // Saturday
        expect(isWeekend(date)).toBe(true);
    });

    it("works with ZonedDateTime", () => {
        const date = Temporal.ZonedDateTime.from(
            "2024-06-16T10:00:00[America/New_York]",
        ); // Sunday
        expect(isWeekend(date)).toBe(true);
    });
});
