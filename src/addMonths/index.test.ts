import { describe } from "vitest";
import { addMonths } from "./index.js";

describe("addMonths", (it) => {
    it("adds months to a PlainDate", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-01-15");
        const result = addMonths(date, 3);
        expect(result.toString()).toBe("2024-04-15");
    });

    it("adds months to a PlainDateTime", ({ expect }) => {
        const dt = Temporal.PlainDateTime.from("2024-03-15T08:00:00");
        const result = addMonths(dt, 2);
        expect(result.toString()).toBe("2024-05-15T08:00:00");
    });

    it("adds months to a ZonedDateTime", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-06-10T12:00:00[Europe/London]",
        );
        const result = addMonths(zdt, 6);
        expect(result.month).toBe(12);
        expect(result.day).toBe(10);
    });

    it("handles end-of-month clamping", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-01-31");
        const result = addMonths(date, 1);
        expect(result.toString()).toBe("2024-02-29");
    });

    it("crosses year boundaries", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-11-15");
        const result = addMonths(date, 3);
        expect(result.toString()).toBe("2025-02-15");
    });
});
