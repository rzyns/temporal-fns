import { describe } from "vitest";
import { formatISO } from "./index.js";

describe("formatISO", (it) => {
    it("formats a PlainDate", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-06-15");
        expect(formatISO(date)).toBe("2024-06-15");
    });

    it("formats a PlainDateTime", ({ expect }) => {
        const dt = Temporal.PlainDateTime.from("2024-06-15T10:30:00");
        expect(formatISO(dt)).toBe("2024-06-15T10:30:00");
    });

    it("formats a PlainTime", ({ expect }) => {
        const time = Temporal.PlainTime.from("10:30:00");
        expect(formatISO(time)).toBe("10:30:00");
    });

    it("formats an Instant", ({ expect }) => {
        const instant = Temporal.Instant.from("2024-06-15T10:30:00Z");
        expect(formatISO(instant)).toBe("2024-06-15T10:30:00Z");
    });
});
