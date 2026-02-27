import { max } from "./index.js";

describe("max", () => {
    it("returns the latest PlainDate from an array", () => {
        const dates = [
            Temporal.PlainDate.from("2024-01-15"),
            Temporal.PlainDate.from("2024-06-20"),
            Temporal.PlainDate.from("2024-03-10"),
        ];
        const result = max(dates);
        expect(result.toString()).toBe("2024-06-20");
    });

    it("returns the latest PlainDateTime from an array", () => {
        const dates = [
            Temporal.PlainDateTime.from("2024-01-15T08:00:00"),
            Temporal.PlainDateTime.from("2024-01-15T16:30:00"),
            Temporal.PlainDateTime.from("2024-01-15T12:00:00"),
        ];
        const result = max(dates);
        expect(result.toString()).toBe("2024-01-15T16:30:00");
    });

    it("returns the latest ZonedDateTime from an array", () => {
        const dates = [
            Temporal.ZonedDateTime.from(
                "2024-01-15T08:00:00[America/New_York]",
            ),
            Temporal.ZonedDateTime.from(
                "2024-06-20T12:00:00[America/New_York]",
            ),
            Temporal.ZonedDateTime.from(
                "2024-03-10T10:00:00[America/New_York]",
            ),
        ];
        const result = max(dates);
        expect(result.toPlainDate().toString()).toBe("2024-06-20");
    });

    it("returns the single element for a single-element array", () => {
        const date = Temporal.PlainDate.from("2024-01-15");
        expect(max([date]).toString()).toBe("2024-01-15");
    });

    it("throws TypeError for an empty array", () => {
        expect(() => max([])).toThrow(TypeError);
        expect(() => max([])).toThrow("max requires at least one date");
    });
});
