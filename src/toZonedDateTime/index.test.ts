import { toZonedDateTime } from "./index.js";

describe("toZonedDateTime", () => {
    it("converts PlainDateTime to ZonedDateTime", () => {
        const pdt = Temporal.PlainDateTime.from("2024-06-15T10:30:00");
        const result = toZonedDateTime(pdt, "America/New_York");
        expect(result.timeZoneId).toBe("America/New_York");
        expect(result.hour).toBe(10);
        expect(result.day).toBe(15);
    });

    it("uses the specified timezone", () => {
        const pdt = Temporal.PlainDateTime.from("2024-06-15T10:30:00");
        const result = toZonedDateTime(pdt, "Asia/Tokyo");
        expect(result.timeZoneId).toBe("Asia/Tokyo");
        expect(result.year).toBe(2024);
        expect(result.month).toBe(6);
    });

    it("handles disambiguation option", () => {
        const pdt = Temporal.PlainDateTime.from("2024-06-15T10:30:00");
        const result = toZonedDateTime(pdt, "UTC", {
            disambiguation: "earlier",
        });
        expect(result.timeZoneId).toBe("UTC");
        expect(result.hour).toBe(10);
    });

    it("defaults to compatible disambiguation", () => {
        const pdt = Temporal.PlainDateTime.from("2024-03-10T02:30:00");
        // During spring-forward in US/Eastern, 2:30 AM doesn't exist
        // "compatible" should resolve without throwing
        const result = toZonedDateTime(pdt, "America/New_York");
        expect(result.timeZoneId).toBe("America/New_York");
    });

    it("preserves date and time components", () => {
        const pdt = Temporal.PlainDateTime.from("2024-12-25T23:59:59");
        const result = toZonedDateTime(pdt, "Europe/London");
        expect(result.year).toBe(2024);
        expect(result.month).toBe(12);
        expect(result.day).toBe(25);
        expect(result.hour).toBe(23);
        expect(result.minute).toBe(59);
        expect(result.second).toBe(59);
    });
});
