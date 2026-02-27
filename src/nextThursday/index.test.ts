import { describe } from "vitest";
import { nextThursday } from "./index.js";

describe("nextThursday", (it) => {
    it("returns the next Thursday", ({ expect }) => {
        const wed = Temporal.PlainDate.from("2024-01-17"); // Wednesday
        const result = nextThursday(wed);
        expect(result.toString()).toBe("2024-01-18");
        expect(result.dayOfWeek).toBe(4);
    });

    it("skips to next week if already Thursday", ({ expect }) => {
        const thu = Temporal.PlainDate.from("2024-01-18"); // Thursday
        const result = nextThursday(thu);
        expect(result.toString()).toBe("2024-01-25");
    });
});
