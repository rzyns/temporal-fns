import { describe } from "vitest";
import { formatDuration } from "./index.js";

describe("formatDuration", (it) => {
    it("formats a simple duration", ({ expect }) => {
        const d = Temporal.Duration.from({ days: 5 });
        expect(formatDuration(d)).toBe("5 days");
    });

    it("formats a complex duration", ({ expect }) => {
        const d = Temporal.Duration.from({ years: 1, months: 2, days: 3 });
        expect(formatDuration(d)).toBe("1 year, 2 months, 3 days");
    });

    it("handles singular forms", ({ expect }) => {
        const d = Temporal.Duration.from({ years: 1, months: 1, days: 1 });
        expect(formatDuration(d)).toBe("1 year, 1 month, 1 day");
    });

    it("returns '0 seconds' for zero duration", ({ expect }) => {
        const d = Temporal.Duration.from("PT0S");
        expect(formatDuration(d)).toBe("0 seconds");
    });
});
