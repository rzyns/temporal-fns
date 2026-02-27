import { setHours } from "./index.js";

describe("setHours", () => {
    it("sets the hours of a PlainDateTime", () => {
        const dt = Temporal.PlainDateTime.from("2024-06-15T10:30:00");
        const result = setHours(dt, 0);
        expect(result.toString()).toBe("2024-06-15T00:30:00");
    });

    it("sets the hours of a ZonedDateTime and preserves timezone", () => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-06-15T10:30:00[America/New_York]",
        );
        const result = setHours(zdt, 23);
        expect(result.hour).toBe(23);
        expect(result.minute).toBe(30);
        expect(result.day).toBe(15);
        expect(result.timeZoneId).toBe("America/New_York");
    });

    it("preserves other time components", () => {
        const dt = Temporal.PlainDateTime.from("2024-06-15T10:30:45.123456789");
        const result = setHours(dt, 15);
        expect(result.hour).toBe(15);
        expect(result.minute).toBe(30);
        expect(result.second).toBe(45);
        expect(result.millisecond).toBe(123);
        expect(result.microsecond).toBe(456);
        expect(result.nanosecond).toBe(789);
    });

    it("sets hours to midnight", () => {
        const dt = Temporal.PlainDateTime.from("2024-06-15T14:30:00");
        const result = setHours(dt, 0);
        expect(result.hour).toBe(0);
        expect(result.day).toBe(15);
    });

    it("sets hours to 23", () => {
        const dt = Temporal.PlainDateTime.from("2024-06-15T00:00:00");
        const result = setHours(dt, 23);
        expect(result.hour).toBe(23);
    });
});
