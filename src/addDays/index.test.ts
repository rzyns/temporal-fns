import { describe } from "vitest";
import { addDays } from "./index.js";

describe("addDays", (it) => {
    it("adds days to a PlainDate", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-01-15");
        const result = addDays(date, 10);
        expect(result.toString()).toBe("2024-01-25");
    });

    it("adds days to a PlainDateTime", ({ expect }) => {
        const dt = Temporal.PlainDateTime.from("2024-01-15T10:30:00");
        const result = addDays(dt, 5);
        expect(result.toString()).toBe("2024-01-20T10:30:00");
    });

    it("adds days to a ZonedDateTime", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-01-15T10:30:00[America/New_York]",
        );
        const result = addDays(zdt, 3);
        expect(result.day).toBe(18);
    });

    it("handles negative amounts", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-01-15");
        const result = addDays(date, -5);
        expect(result.toString()).toBe("2024-01-10");
    });

    it("crosses month boundaries", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-01-28");
        const result = addDays(date, 5);
        expect(result.toString()).toBe("2024-02-02");
    });
});
