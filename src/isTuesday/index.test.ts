import { isTuesday } from "./index.js";

describe("isTuesday", () => {
    it("returns true for a Tuesday", () => {
        const date = Temporal.PlainDate.from("2024-06-11"); // Tuesday
        expect(isTuesday(date)).toBe(true);
    });

    it("returns false for a non-Tuesday", () => {
        const date = Temporal.PlainDate.from("2024-06-10"); // Monday
        expect(isTuesday(date)).toBe(false);
    });

    it("works with PlainDateTime", () => {
        const date = Temporal.PlainDateTime.from("2024-06-11T10:00:00");
        expect(isTuesday(date)).toBe(true);
    });
});
