import { startOfMonth } from "./index.js";

describe("startOfMonth", () => {
    it("sets day to 1 for PlainDate", () => {
        const date = Temporal.PlainDate.from("2024-06-15");
        const result = startOfMonth(date);
        expect(result.toString()).toBe("2024-06-01");
    });

    it("sets day to 1 and time to midnight for PlainDateTime", () => {
        const dt = Temporal.PlainDateTime.from("2024-06-15T14:30:00");
        const result = startOfMonth(dt);
        expect(result.toString()).toBe("2024-06-01T00:00:00");
    });

    it("sets day to 1 and time to midnight for ZonedDateTime", () => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-06-15T14:30:00[America/New_York]",
        );
        const result = startOfMonth(zdt);
        expect(result.day).toBe(1);
        expect(result.hour).toBe(0);
        expect(result.minute).toBe(0);
    });

    it("handles already first day of month", () => {
        const date = Temporal.PlainDate.from("2024-06-01");
        const result = startOfMonth(date);
        expect(result.toString()).toBe("2024-06-01");
    });
});
