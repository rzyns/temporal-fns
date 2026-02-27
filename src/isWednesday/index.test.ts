import { describe } from "vitest";
import { isWednesday } from "./index.js";

describe("isWednesday", (it) => {
    it("returns true for a Wednesday", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-06-12"); // Wednesday
        expect(isWednesday(date)).toBe(true);
    });

    it("returns false for a non-Wednesday", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-06-13"); // Thursday
        expect(isWednesday(date)).toBe(false);
    });

    it("works with ZonedDateTime", ({ expect }) => {
        const date = Temporal.ZonedDateTime.from(
            "2024-06-12T12:00:00[Europe/London]",
        );
        expect(isWednesday(date)).toBe(true);
    });
});
