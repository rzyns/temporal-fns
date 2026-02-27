import { isSaturday } from "./index.js";

describe("isSaturday", () => {
    it("returns true for a Saturday", () => {
        const date = Temporal.PlainDate.from("2024-06-15"); // Saturday
        expect(isSaturday(date)).toBe(true);
    });

    it("returns false for a non-Saturday", () => {
        const date = Temporal.PlainDate.from("2024-06-16"); // Sunday
        expect(isSaturday(date)).toBe(false);
    });

    it("works with PlainDateTime", () => {
        const date = Temporal.PlainDateTime.from("2024-06-15T14:00:00");
        expect(isSaturday(date)).toBe(true);
    });
});
