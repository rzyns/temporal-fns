import { toPlainTime } from "./index.js";

describe("toPlainTime", () => {
    it("converts PlainDateTime to PlainTime", () => {
        const pdt = Temporal.PlainDateTime.from("2024-06-15T10:30:45");
        const result = toPlainTime(pdt);
        expect(result instanceof Temporal.PlainTime).toBe(true);
        expect(result.hour).toBe(10);
        expect(result.minute).toBe(30);
        expect(result.second).toBe(45);
    });

    it("converts ZonedDateTime to PlainTime", () => {
        const zdt = Temporal.ZonedDateTime.from("2024-06-15T14:20:00[UTC]");
        const result = toPlainTime(zdt);
        expect(result instanceof Temporal.PlainTime).toBe(true);
        expect(result.hour).toBe(14);
        expect(result.minute).toBe(20);
        expect(result.second).toBe(0);
    });

    it("strips date information", () => {
        const pdt = Temporal.PlainDateTime.from("2024-12-31T23:59:59");
        const result = toPlainTime(pdt);
        expect(result.hour).toBe(23);
        expect(result.minute).toBe(59);
        expect(result.second).toBe(59);
    });

    it("preserves sub-second precision", () => {
        const pdt = Temporal.PlainDateTime.from(
            "2024-01-01T12:00:00.123456789",
        );
        const result = toPlainTime(pdt);
        expect(result.millisecond).toBe(123);
        expect(result.microsecond).toBe(456);
        expect(result.nanosecond).toBe(789);
    });
});
