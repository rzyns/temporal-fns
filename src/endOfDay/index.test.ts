import { describe } from "vitest";
import { endOfDay } from "./index.js";

describe("endOfDay", (it) => {
    it("returns the same PlainDate unchanged", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-06-15");
        const result = endOfDay(date);
        expect(result.toString()).toBe("2024-06-15");
    });

    it("sets time to end of day for PlainDateTime", ({ expect }) => {
        const dt = Temporal.PlainDateTime.from("2024-06-15T10:00:00");
        const result = endOfDay(dt);
        expect(result.toString()).toBe("2024-06-15T23:59:59.999999999");
    });

    it("sets time to end of day for ZonedDateTime", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-06-15T10:00:00[America/New_York]",
        );
        const result = endOfDay(zdt);
        expect(result.hour).toBe(23);
        expect(result.minute).toBe(59);
        expect(result.second).toBe(59);
        expect(result.millisecond).toBe(999);
        expect(result.microsecond).toBe(999);
        expect(result.nanosecond).toBe(999);
    });

    it("handles already end-of-day PlainDateTime", ({ expect }) => {
        const dt = Temporal.PlainDateTime.from("2024-06-15T23:59:59.999999999");
        const result = endOfDay(dt);
        expect(result.toString()).toBe("2024-06-15T23:59:59.999999999");
    });
});
