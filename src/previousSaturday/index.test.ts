import { describe } from "vitest";
import { previousSaturday } from "./index.js";

describe("previousSaturday", (it) => {
    it("returns the previous Saturday", ({ expect }) => {
        const wed = Temporal.PlainDate.from("2024-01-17"); // Wednesday
        const result = previousSaturday(wed);
        expect(result.toString()).toBe("2024-01-13");
        expect(result.dayOfWeek).toBe(6);
    });

    it("skips to prior week if already Saturday", ({ expect }) => {
        const sat = Temporal.PlainDate.from("2024-01-20"); // Saturday
        const result = previousSaturday(sat);
        expect(result.toString()).toBe("2024-01-13");
    });
});
