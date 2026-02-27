import { describe } from "vitest";
import { getMinutes } from "./index.js";

describe("getMinutes", (it) => {
    it("returns the minute of a PlainTime", ({ expect }) => {
        const time = Temporal.PlainTime.from("14:30:00");
        expect(getMinutes(time)).toBe(30);
    });

    it("returns the minute of a PlainDateTime", ({ expect }) => {
        const dt = Temporal.PlainDateTime.from("2024-06-15T10:45:00");
        expect(getMinutes(dt)).toBe(45);
    });

    it("returns the minute of a ZonedDateTime", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-06-15T23:59:59[America/New_York]",
        );
        expect(getMinutes(zdt)).toBe(59);
    });

    it("returns 0 for the start of an hour", ({ expect }) => {
        const time = Temporal.PlainTime.from("10:00:00");
        expect(getMinutes(time)).toBe(0);
    });
});
