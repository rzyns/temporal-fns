import { describe } from "vitest";
import { endOfHour } from "./index.js";

describe("endOfHour", (it) => {
    it("sets to end of hour for PlainDateTime", ({ expect }) => {
        const dt = Temporal.PlainDateTime.from("2024-06-15T14:20:00");
        const result = endOfHour(dt);
        expect(result.toString()).toBe("2024-06-15T14:59:59.999999999");
    });

    it("sets to end of hour for ZonedDateTime", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-06-15T14:20:00[America/New_York]",
        );
        const result = endOfHour(zdt);
        expect(result.hour).toBe(14);
        expect(result.minute).toBe(59);
        expect(result.second).toBe(59);
        expect(result.millisecond).toBe(999);
    });

    it("handles already end-of-hour", ({ expect }) => {
        const dt = Temporal.PlainDateTime.from("2024-06-15T14:59:59.999999999");
        const result = endOfHour(dt);
        expect(result.toString()).toBe("2024-06-15T14:59:59.999999999");
    });
});
