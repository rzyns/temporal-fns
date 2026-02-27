import { describe } from "vitest";
import { getHours } from "./index.js";

describe("getHours", (it) => {
    it("returns the hour of a PlainTime", ({ expect }) => {
        const time = Temporal.PlainTime.from("14:30:00");
        expect(getHours(time)).toBe(14);
    });

    it("returns the hour of a PlainDateTime", ({ expect }) => {
        const dt = Temporal.PlainDateTime.from("2024-06-15T10:30:00");
        expect(getHours(dt)).toBe(10);
    });

    it("returns the hour of a ZonedDateTime", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-06-15T23:59:59[America/New_York]",
        );
        expect(getHours(zdt)).toBe(23);
    });

    it("returns 0 for midnight", ({ expect }) => {
        const time = Temporal.PlainTime.from("00:00:00");
        expect(getHours(time)).toBe(0);
    });
});
