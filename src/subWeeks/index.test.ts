import { subWeeks } from "./index.js";

describe("subWeeks", () => {
    it("subtracts weeks from a PlainDate", () => {
        const date = Temporal.PlainDate.from("2024-01-15");
        const result = subWeeks(date, 2);
        expect(result.toString()).toBe("2024-01-01");
    });

    it("subtracts weeks from a PlainDateTime", () => {
        const dt = Temporal.PlainDateTime.from("2024-03-15T14:00:00");
        const result = subWeeks(dt, 1);
        expect(result.toString()).toBe("2024-03-08T14:00:00");
    });

    it("subtracts weeks from a ZonedDateTime", () => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-06-29T10:00:00[Asia/Tokyo]",
        );
        const result = subWeeks(zdt, 4);
        expect(result.day).toBe(1);
        expect(result.month).toBe(6);
    });

    it("crosses month boundaries backwards", () => {
        const date = Temporal.PlainDate.from("2024-02-08");
        const result = subWeeks(date, 2);
        expect(result.toString()).toBe("2024-01-25");
    });
});
