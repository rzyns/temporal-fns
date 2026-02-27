import { describe } from "vitest";
import { addHours } from "./index.js";

describe("addHours", (it) => {
    it("adds hours to a PlainTime", ({ expect }) => {
        const time = Temporal.PlainTime.from("10:00:00");
        const result = addHours(time, 3);
        expect(result.toString()).toBe("13:00:00");
    });

    it("adds hours to a PlainDateTime", ({ expect }) => {
        const dt = Temporal.PlainDateTime.from("2024-01-15T10:00:00");
        const result = addHours(dt, 5);
        expect(result.toString()).toBe("2024-01-15T15:00:00");
    });

    it("adds hours to a ZonedDateTime", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-01-15T10:00:00[America/New_York]",
        );
        const result = addHours(zdt, 8);
        expect(result.hour).toBe(18);
    });

    it("crosses day boundary on PlainDateTime", ({ expect }) => {
        const dt = Temporal.PlainDateTime.from("2024-01-15T22:00:00");
        const result = addHours(dt, 5);
        expect(result.toString()).toBe("2024-01-16T03:00:00");
    });

    it("wraps around on PlainTime", ({ expect }) => {
        const time = Temporal.PlainTime.from("23:00:00");
        const result = addHours(time, 3);
        expect(result.toString()).toBe("02:00:00");
    });
});
