import { describe } from "vitest";
import { setSeconds } from "./index.js";

describe("setSeconds", (it) => {
    it("sets the seconds of a PlainDateTime", ({ expect }) => {
        const dt = Temporal.PlainDateTime.from("2024-06-15T10:30:45");
        const result = setSeconds(dt, 0);
        expect(result.toString()).toBe("2024-06-15T10:30:00");
    });

    it("sets the seconds of a ZonedDateTime and preserves timezone", ({
        expect,
    }) => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-06-15T10:30:00[America/New_York]",
        );
        const result = setSeconds(zdt, 59);
        expect(result.second).toBe(59);
        expect(result.hour).toBe(10);
        expect(result.minute).toBe(30);
        expect(result.timeZoneId).toBe("America/New_York");
    });

    it("preserves other time components", ({ expect }) => {
        const dt = Temporal.PlainDateTime.from("2024-06-15T10:30:45.123456789");
        const result = setSeconds(dt, 30);
        expect(result.second).toBe(30);
        expect(result.hour).toBe(10);
        expect(result.minute).toBe(30);
        expect(result.millisecond).toBe(123);
        expect(result.microsecond).toBe(456);
        expect(result.nanosecond).toBe(789);
    });

    it("sets seconds to maximum value", ({ expect }) => {
        const dt = Temporal.PlainDateTime.from("2024-06-15T10:30:00");
        const result = setSeconds(dt, 59);
        expect(result.second).toBe(59);
    });

    it("preserves date components", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-12-31T23:59:59[Europe/London]",
        );
        const result = setSeconds(zdt, 0);
        expect(result.second).toBe(0);
        expect(result.year).toBe(2024);
        expect(result.month).toBe(12);
        expect(result.day).toBe(31);
        expect(result.hour).toBe(23);
        expect(result.minute).toBe(59);
    });
});
