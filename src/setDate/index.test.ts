import { setDate } from "./index.js";

describe("setDate", () => {
    it("sets the day of month of a PlainDate", () => {
        const date = Temporal.PlainDate.from("2024-06-15");
        const result = setDate(date, 1);
        expect(result.toString()).toBe("2024-06-01");
    });

    it("sets the day of month of a PlainDateTime", () => {
        const dt = Temporal.PlainDateTime.from("2024-06-15T10:30:00");
        const result = setDate(dt, 28);
        expect(result.toString()).toBe("2024-06-28T10:30:00");
    });

    it("sets the day of month of a ZonedDateTime and preserves timezone", () => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-06-15T10:30:00[America/New_York]",
        );
        const result = setDate(zdt, 22);
        expect(result.day).toBe(22);
        expect(result.month).toBe(6);
        expect(result.hour).toBe(10);
        expect(result.timeZoneId).toBe("America/New_York");
    });

    it("clamps day to end of month when day exceeds month length", () => {
        const date = Temporal.PlainDate.from("2024-02-15");
        // Feb 2024 has 29 days (leap year), setting to 31 should clamp
        const result = setDate(date, 31);
        expect(result.toString()).toBe("2024-02-29");
    });

    it("sets to the last day of a 30-day month", () => {
        const date = Temporal.PlainDate.from("2024-04-15");
        const result = setDate(date, 30);
        expect(result.toString()).toBe("2024-04-30");
    });

    it("preserves time components for PlainDateTime", () => {
        const dt = Temporal.PlainDateTime.from("2024-06-15T23:59:59.999999999");
        const result = setDate(dt, 1);
        expect(result.day).toBe(1);
        expect(result.hour).toBe(23);
        expect(result.minute).toBe(59);
        expect(result.second).toBe(59);
        expect(result.nanosecond).toBe(999);
    });
});
