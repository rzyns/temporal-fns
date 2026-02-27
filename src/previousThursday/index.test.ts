import { describe } from "vitest";
import { previousThursday } from "./index.js";

describe("previousThursday", (it) => {
    it("returns the previous Thursday", ({ expect }) => {
        const sat = Temporal.PlainDate.from("2024-01-20"); // Saturday
        const result = previousThursday(sat);
        expect(result.toString()).toBe("2024-01-18");
        expect(result.dayOfWeek).toBe(4);
    });

    it("skips to prior week if already Thursday", ({ expect }) => {
        const thu = Temporal.PlainDate.from("2024-01-18"); // Thursday
        const result = previousThursday(thu);
        expect(result.toString()).toBe("2024-01-11");
    });
});
