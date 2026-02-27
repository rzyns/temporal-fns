import { describe } from "vitest";
import { isTuesday } from "./index.js";

describe("isTuesday", (it) => {
    it("returns true for a Tuesday", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-06-11"); // Tuesday
        expect(isTuesday(date)).toBe(true);
    });

    it("returns false for a non-Tuesday", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-06-10"); // Monday
        expect(isTuesday(date)).toBe(false);
    });

    it("works with PlainDateTime", ({ expect }) => {
        const date = Temporal.PlainDateTime.from("2024-06-11T10:00:00");
        expect(isTuesday(date)).toBe(true);
    });
});
