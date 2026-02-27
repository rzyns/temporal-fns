import { describe } from "vitest";
import { toPlainDateTime } from "./index.js";

describe("toPlainDateTime", (it) => {
    it("converts ZonedDateTime to PlainDateTime", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-06-15T10:30:00[America/New_York]",
        );
        const result = toPlainDateTime(zdt);
        expect(result instanceof Temporal.PlainDateTime).toBe(true);
        expect(result.year).toBe(2024);
        expect(result.month).toBe(6);
        expect(result.day).toBe(15);
        expect(result.hour).toBe(10);
        expect(result.minute).toBe(30);
    });

    it("strips timezone information", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-06-15T10:30:00[Asia/Tokyo]",
        );
        const result = toPlainDateTime(zdt);
        // PlainDateTime has no timeZoneId property
        expect(result.toString()).toBe("2024-06-15T10:30:00");
    });

    it("preserves date and time components", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from("2024-12-25T23:59:59.123[UTC]");
        const result = toPlainDateTime(zdt);
        expect(result.year).toBe(2024);
        expect(result.month).toBe(12);
        expect(result.day).toBe(25);
        expect(result.hour).toBe(23);
        expect(result.minute).toBe(59);
        expect(result.second).toBe(59);
        expect(result.millisecond).toBe(123);
    });

    it("works with different timezones", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-01-01T00:00:00[Europe/London]",
        );
        const result = toPlainDateTime(zdt);
        expect(result.year).toBe(2024);
        expect(result.month).toBe(1);
        expect(result.day).toBe(1);
        expect(result.hour).toBe(0);
    });
});
