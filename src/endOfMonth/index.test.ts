import { endOfMonth } from "./index.js";

describe("endOfMonth", () => {
    it("sets day to last day for PlainDate", () => {
        const date = Temporal.PlainDate.from("2024-06-15");
        const result = endOfMonth(date);
        expect(result.toString()).toBe("2024-06-30");
    });

    it("handles February in a leap year", () => {
        const date = Temporal.PlainDate.from("2024-02-10");
        const result = endOfMonth(date);
        expect(result.toString()).toBe("2024-02-29");
    });

    it("sets day and time to end of month for PlainDateTime", () => {
        const dt = Temporal.PlainDateTime.from("2024-01-15T10:00:00");
        const result = endOfMonth(dt);
        expect(result.toString()).toBe("2024-01-31T23:59:59.999999999");
    });

    it("sets day and time to end of month for ZonedDateTime", () => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-06-15T10:00:00[America/New_York]",
        );
        const result = endOfMonth(zdt);
        expect(result.day).toBe(30);
        expect(result.hour).toBe(23);
        expect(result.minute).toBe(59);
        expect(result.second).toBe(59);
    });
});
