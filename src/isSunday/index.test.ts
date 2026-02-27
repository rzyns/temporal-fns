import { isSunday } from "./index.js";

describe("isSunday", () => {
    it("returns true for a Sunday", () => {
        const date = Temporal.PlainDate.from("2024-06-16"); // Sunday
        expect(isSunday(date)).toBe(true);
    });

    it("returns false for a non-Sunday", () => {
        const date = Temporal.PlainDate.from("2024-06-15"); // Saturday
        expect(isSunday(date)).toBe(false);
    });

    it("works with ZonedDateTime", () => {
        const date = Temporal.ZonedDateTime.from(
            "2024-06-16T09:00:00[Europe/Berlin]",
        );
        expect(isSunday(date)).toBe(true);
    });
});
