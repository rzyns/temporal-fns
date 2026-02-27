import { describe } from "vitest";
import { pipe } from "./index.js";

describe("pipe", (it) => {
    it("returns the value unchanged when called with no functions (identity)", ({
        expect,
    }) => {
        const date = Temporal.PlainDate.from("2024-06-15");
        expect(pipe(date)).toBe(date);
    });

    it("applies a single function", ({ expect }) => {
        const result = pipe(1, (x) => x + 10);
        expect(result).toBe(11);
    });

    it("chains three functions left to right", ({ expect }) => {
        const result = pipe(
            2,
            (x) => x * 3,
            (x) => x + 1,
            (x) => `result: ${x}`,
        );
        expect(result).toBe("result: 7");
    });

    it("works with ZonedDateTime as seed value", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-06-15T10:00:00[America/New_York]",
        );
        const result = pipe(
            zdt,
            (d) => d.add({ days: 1 }),
            (d) => d.toString(),
        );
        expect(result).toContain("2024-06-16");
    });

    it("works with PlainDate as seed value", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-06-15");
        const result = pipe(
            date,
            (d) => d.add({ days: 5 }),
            (d) => d.toString(),
        );
        expect(result).toBe("2024-06-20");
    });

    it("works with PlainDateTime as seed value", ({ expect }) => {
        const dt = Temporal.PlainDateTime.from("2024-06-15T10:30:00");
        const result = pipe(dt, (d) => d.add({ hours: 2 }));
        expect(result.hour).toBe(12);
    });

    it("works with non-Temporal types", ({ expect }) => {
        const result = pipe(
            [3, 1, 4, 1, 5],
            (arr) => arr.filter((x) => x > 2),
            (arr) => arr.length,
        );
        expect(result).toBe(3);
    });
});
