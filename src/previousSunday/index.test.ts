import { describe } from "vitest";
import { previousSunday } from "./index.js";

describe("previousSunday", (it) => {
    it("returns the previous Sunday", ({ expect }) => {
        const wed = Temporal.PlainDate.from("2024-01-17"); // Wednesday
        const result = previousSunday(wed);
        expect(result.toString()).toBe("2024-01-14");
        expect(result.dayOfWeek).toBe(7);
    });

    it("skips to prior week if already Sunday", ({ expect }) => {
        const sun = Temporal.PlainDate.from("2024-01-21"); // Sunday
        const result = previousSunday(sun);
        expect(result.toString()).toBe("2024-01-14");
    });
});
