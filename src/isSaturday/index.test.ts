import { describe } from "vitest";
import { isSaturday } from "./index.js";

describe("isSaturday", (it) => {
    it("returns true for a Saturday", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-06-15"); // Saturday
        expect(isSaturday(date)).toBe(true);
    });

    it("returns false for a non-Saturday", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-06-16"); // Sunday
        expect(isSaturday(date)).toBe(false);
    });

    it("works with PlainDateTime", ({ expect }) => {
        const date = Temporal.PlainDateTime.from("2024-06-15T14:00:00");
        expect(isSaturday(date)).toBe(true);
    });
});
