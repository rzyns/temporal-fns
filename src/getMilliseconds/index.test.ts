import { describe } from "vitest";
import { getMilliseconds } from "./index.js";

describe("getMilliseconds", (it) => {
    it("returns the millisecond of a PlainTime", ({ expect }) => {
        const time = Temporal.PlainTime.from("14:30:45.123");
        expect(getMilliseconds(time)).toBe(123);
    });

    it("returns the millisecond of a PlainDateTime", ({ expect }) => {
        const dt = Temporal.PlainDateTime.from("2024-06-15T10:30:00.456");
        expect(getMilliseconds(dt)).toBe(456);
    });

    it("returns the millisecond of a ZonedDateTime", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-06-15T23:59:59.999[America/New_York]",
        );
        expect(getMilliseconds(zdt)).toBe(999);
    });

    it("returns 0 when no milliseconds", ({ expect }) => {
        const time = Temporal.PlainTime.from("10:30:00");
        expect(getMilliseconds(time)).toBe(0);
    });
});
