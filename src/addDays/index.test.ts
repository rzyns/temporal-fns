import { addDays } from "./index.js";

describe("addDays", () => {
    it("adds days to a PlainDate", () => {
        const date = Temporal.PlainDate.from("2024-01-15");
        const result = addDays(date, 10);
        expect(result.toString()).toBe("2024-01-25");
    });

    it("adds days to a PlainDateTime", () => {
        const dt = Temporal.PlainDateTime.from("2024-01-15T10:30:00");
        const result = addDays(dt, 5);
        expect(result.toString()).toBe("2024-01-20T10:30:00");
    });

    it("adds days to a ZonedDateTime", () => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-01-15T10:30:00[America/New_York]",
        );
        const result = addDays(zdt, 3);
        expect(result.day).toBe(18);
    });

    it("handles negative amounts", () => {
        const date = Temporal.PlainDate.from("2024-01-15");
        const result = addDays(date, -5);
        expect(result.toString()).toBe("2024-01-10");
    });

    it("crosses month boundaries", () => {
        const date = Temporal.PlainDate.from("2024-01-28");
        const result = addDays(date, 5);
        expect(result.toString()).toBe("2024-02-02");
    });
});
