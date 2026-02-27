import { subDays } from "./index.js";

describe("subDays", () => {
    it("subtracts days from a PlainDate", () => {
        const date = Temporal.PlainDate.from("2024-01-15");
        const result = subDays(date, 10);
        expect(result.toString()).toBe("2024-01-05");
    });

    it("subtracts days from a PlainDateTime", () => {
        const dt = Temporal.PlainDateTime.from("2024-01-15T10:30:00");
        const result = subDays(dt, 5);
        expect(result.toString()).toBe("2024-01-10T10:30:00");
    });

    it("subtracts days from a ZonedDateTime", () => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-01-15T10:30:00[America/New_York]",
        );
        const result = subDays(zdt, 3);
        expect(result.day).toBe(12);
    });

    it("crosses month boundaries backwards", () => {
        const date = Temporal.PlainDate.from("2024-02-05");
        const result = subDays(date, 10);
        expect(result.toString()).toBe("2024-01-26");
    });
});
