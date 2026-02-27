import { setMinutes } from "./index.js";

describe("setMinutes", () => {
    it("sets the minutes of a PlainDateTime", () => {
        const dt = Temporal.PlainDateTime.from("2024-06-15T10:30:00");
        const result = setMinutes(dt, 0);
        expect(result.toString()).toBe("2024-06-15T10:00:00");
    });

    it("sets the minutes of a ZonedDateTime and preserves timezone", () => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-06-15T10:30:00[America/New_York]",
        );
        const result = setMinutes(zdt, 45);
        expect(result.minute).toBe(45);
        expect(result.hour).toBe(10);
        expect(result.timeZoneId).toBe("America/New_York");
    });

    it("preserves other time components", () => {
        const dt = Temporal.PlainDateTime.from("2024-06-15T10:30:45.123456789");
        const result = setMinutes(dt, 59);
        expect(result.minute).toBe(59);
        expect(result.hour).toBe(10);
        expect(result.second).toBe(45);
        expect(result.millisecond).toBe(123);
        expect(result.microsecond).toBe(456);
        expect(result.nanosecond).toBe(789);
    });

    it("sets minutes to 0", () => {
        const dt = Temporal.PlainDateTime.from("2024-06-15T14:59:00");
        const result = setMinutes(dt, 0);
        expect(result.minute).toBe(0);
        expect(result.hour).toBe(14);
    });

    it("preserves date components", () => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-12-31T23:59:59[Europe/London]",
        );
        const result = setMinutes(zdt, 30);
        expect(result.minute).toBe(30);
        expect(result.year).toBe(2024);
        expect(result.month).toBe(12);
        expect(result.day).toBe(31);
        expect(result.hour).toBe(23);
    });
});
