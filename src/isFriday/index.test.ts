import { describe } from "vitest";
import { isFriday } from "./index.js";

describe("isFriday", (it) => {
    it("returns true for a Friday", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-06-14"); // Friday
        expect(isFriday(date)).toBe(true);
    });

    it("returns false for a non-Friday", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-06-15"); // Saturday
        expect(isFriday(date)).toBe(false);
    });

    it("works with ZonedDateTime", ({ expect }) => {
        const date = Temporal.ZonedDateTime.from(
            "2024-06-14T17:00:00[Asia/Tokyo]",
        );
        expect(isFriday(date)).toBe(true);
    });
});
