import { describe } from "vitest";
import { endOfSecond } from "./index.js";

describe("endOfSecond", (it) => {
    it("sets sub-second fields to max for PlainDateTime", ({ expect }) => {
        const dt = Temporal.PlainDateTime.from("2024-06-15T14:35:45");
        const result = endOfSecond(dt);
        expect(result.toString()).toBe("2024-06-15T14:35:45.999999999");
    });

    it("sets sub-second fields to max for ZonedDateTime", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-06-15T14:35:45[America/New_York]",
        );
        const result = endOfSecond(zdt);
        expect(result.second).toBe(45);
        expect(result.millisecond).toBe(999);
        expect(result.microsecond).toBe(999);
        expect(result.nanosecond).toBe(999);
    });

    it("handles already end-of-second", ({ expect }) => {
        const dt = Temporal.PlainDateTime.from("2024-06-15T14:35:45.999999999");
        const result = endOfSecond(dt);
        expect(result.toString()).toBe("2024-06-15T14:35:45.999999999");
    });
});
