import { describe } from "vitest";
import { nextTuesday } from "./index.js";

describe("nextTuesday", (it) => {
    it("returns the next Tuesday", ({ expect }) => {
        const wed = Temporal.PlainDate.from("2024-01-17"); // Wednesday
        const result = nextTuesday(wed);
        expect(result.toString()).toBe("2024-01-23");
        expect(result.dayOfWeek).toBe(2);
    });

    it("skips to next week if already Tuesday", ({ expect }) => {
        const tue = Temporal.PlainDate.from("2024-01-16"); // Tuesday
        const result = nextTuesday(tue);
        expect(result.toString()).toBe("2024-01-23");
    });
});
