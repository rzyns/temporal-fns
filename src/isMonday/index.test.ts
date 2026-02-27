import { isMonday } from "./index.js";

describe("isMonday", () => {
    it("returns true for a Monday", () => {
        const date = Temporal.PlainDate.from("2024-06-10"); // Monday
        expect(isMonday(date)).toBe(true);
    });

    it("returns false for a non-Monday", () => {
        const date = Temporal.PlainDate.from("2024-06-11"); // Tuesday
        expect(isMonday(date)).toBe(false);
    });

    it("works with ZonedDateTime", () => {
        const date = Temporal.ZonedDateTime.from(
            "2024-06-10T12:00:00[America/New_York]",
        );
        expect(isMonday(date)).toBe(true);
    });
});
