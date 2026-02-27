import { nextSunday } from "./index.js";

describe("nextSunday", () => {
    it("returns the next Sunday", () => {
        const wed = Temporal.PlainDate.from("2024-01-17"); // Wednesday
        const result = nextSunday(wed);
        expect(result.toString()).toBe("2024-01-21");
        expect(result.dayOfWeek).toBe(7);
    });

    it("skips to next week if already Sunday", () => {
        const sun = Temporal.PlainDate.from("2024-01-21"); // Sunday
        const result = nextSunday(sun);
        expect(result.toString()).toBe("2024-01-28");
    });
});
