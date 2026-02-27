import { setYear } from "./index.js";

describe("setYear", () => {
    it("sets the year of a PlainDate", () => {
        const date = Temporal.PlainDate.from("2024-06-15");
        const result = setYear(date, 2000);
        expect(result.toString()).toBe("2000-06-15");
    });

    it("sets the year of a PlainDateTime", () => {
        const dt = Temporal.PlainDateTime.from("2024-06-15T10:30:00");
        const result = setYear(dt, 1999);
        expect(result.toString()).toBe("1999-06-15T10:30:00");
    });

    it("sets the year of a ZonedDateTime and preserves timezone", () => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-06-15T10:30:00[America/New_York]",
        );
        const result = setYear(zdt, 2030);
        expect(result.year).toBe(2030);
        expect(result.month).toBe(6);
        expect(result.day).toBe(15);
        expect(result.hour).toBe(10);
        expect(result.timeZoneId).toBe("America/New_York");
    });

    it("handles leap year date (Feb 29) set to non-leap year", () => {
        const date = Temporal.PlainDate.from("2024-02-29");
        // Temporal clamps day to 28 when moving to a non-leap year
        const result = setYear(date, 2023);
        expect(result.toString()).toBe("2023-02-28");
    });

    it("preserves time components for PlainDateTime", () => {
        const dt = Temporal.PlainDateTime.from("2024-12-31T23:59:59.123456789");
        const result = setYear(dt, 2025);
        expect(result.year).toBe(2025);
        expect(result.hour).toBe(23);
        expect(result.minute).toBe(59);
        expect(result.second).toBe(59);
        expect(result.millisecond).toBe(123);
        expect(result.microsecond).toBe(456);
        expect(result.nanosecond).toBe(789);
    });
});
