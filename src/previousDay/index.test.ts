import { describe } from "vitest";
import { previousDay } from "./index.js";

describe("previousDay", (it) => {
    it("finds the previous Monday from a Wednesday", ({ expect }) => {
        const wed = Temporal.PlainDate.from("2024-01-17"); // Wednesday
        const result = previousDay(wed, 1);
        expect(result.toString()).toBe("2024-01-15");
        expect(result.dayOfWeek).toBe(1);
    });

    it("finds the previous Wednesday from a Wednesday (goes to prior week)", ({
        expect,
    }) => {
        const wed = Temporal.PlainDate.from("2024-01-17"); // Wednesday
        const result = previousDay(wed, 3);
        expect(result.toString()).toBe("2024-01-10");
    });

    it("crosses month boundary backwards", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-02-02"); // Friday
        const result = previousDay(date, 1); // previous Monday
        expect(result.toString()).toBe("2024-01-29");
        expect(result.dayOfWeek).toBe(1);
    });

    it("works with ZonedDateTime", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from("2024-01-17T10:00:00[UTC]");
        const result = previousDay(zdt, 1); // previous Monday
        expect(result.dayOfWeek).toBe(1);
        expect(result.day).toBe(15);
    });

    it("works with PlainDateTime", ({ expect }) => {
        const pdt = Temporal.PlainDateTime.from("2024-01-17T10:00:00");
        const result = previousDay(pdt, 7); // previous Sunday
        expect(result.dayOfWeek).toBe(7);
        expect(result.day).toBe(14);
    });
});
