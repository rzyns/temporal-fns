import { describe } from "vitest";
import { getSeconds } from "./index.js";

describe("getSeconds", (it) => {
    it("returns the second of a PlainTime", ({ expect }) => {
        const time = Temporal.PlainTime.from("14:30:45");
        expect(getSeconds(time)).toBe(45);
    });

    it("returns the second of a PlainDateTime", ({ expect }) => {
        const dt = Temporal.PlainDateTime.from("2024-06-15T10:30:30");
        expect(getSeconds(dt)).toBe(30);
    });

    it("returns the second of a ZonedDateTime", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-06-15T23:59:59[America/New_York]",
        );
        expect(getSeconds(zdt)).toBe(59);
    });

    it("returns 0 for the start of a minute", ({ expect }) => {
        const time = Temporal.PlainTime.from("10:30:00");
        expect(getSeconds(time)).toBe(0);
    });
});
