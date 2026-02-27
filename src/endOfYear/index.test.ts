import { describe } from "vitest";
import { endOfYear } from "./index.js";

describe("endOfYear", (it) => {
    it("sets to Dec 31 for PlainDate", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-06-15");
        const result = endOfYear(date);
        expect(result.toString()).toBe("2024-12-31");
    });

    it("sets to Dec 31 end of day for PlainDateTime", ({ expect }) => {
        const dt = Temporal.PlainDateTime.from("2024-06-15T10:00:00");
        const result = endOfYear(dt);
        expect(result.toString()).toBe("2024-12-31T23:59:59.999999999");
    });

    it("sets to Dec 31 end of day for ZonedDateTime", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-06-15T10:00:00[America/New_York]",
        );
        const result = endOfYear(zdt);
        expect(result.month).toBe(12);
        expect(result.day).toBe(31);
        expect(result.hour).toBe(23);
        expect(result.minute).toBe(59);
    });

    it("handles already Dec 31", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-12-31");
        const result = endOfYear(date);
        expect(result.toString()).toBe("2024-12-31");
    });
});
