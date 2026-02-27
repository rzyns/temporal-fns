import { describe } from "vitest";
import { subMonths } from "./index.js";

describe("subMonths", (it) => {
    it("subtracts months from a PlainDate", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-06-15");
        const result = subMonths(date, 3);
        expect(result.toString()).toBe("2024-03-15");
    });

    it("subtracts months from a PlainDateTime", ({ expect }) => {
        const dt = Temporal.PlainDateTime.from("2024-05-15T08:00:00");
        const result = subMonths(dt, 2);
        expect(result.toString()).toBe("2024-03-15T08:00:00");
    });

    it("subtracts months from a ZonedDateTime", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-06-10T12:00:00[Europe/London]",
        );
        const result = subMonths(zdt, 6);
        expect(result.month).toBe(12);
        expect(result.year).toBe(2023);
    });

    it("handles end-of-month clamping", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-03-31");
        const result = subMonths(date, 1);
        expect(result.toString()).toBe("2024-02-29");
    });
});
