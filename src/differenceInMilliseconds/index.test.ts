import { differenceInMilliseconds } from "./index.js";

describe("differenceInMilliseconds", () => {
    it("returns the number of milliseconds between two Instants", () => {
        const left = Temporal.Instant.from("2024-01-15T14:00:01Z");
        const right = Temporal.Instant.from("2024-01-15T14:00:00Z");
        expect(differenceInMilliseconds(left, right)).toBe(1000);
    });

    it("returns a negative number when dateLeft is before dateRight", () => {
        const left = Temporal.Instant.from("2024-01-15T14:00:00Z");
        const right = Temporal.Instant.from("2024-01-15T14:00:05Z");
        expect(differenceInMilliseconds(left, right)).toBe(-5000);
    });

    it("returns 0 for the same instant", () => {
        const instant = Temporal.Instant.from("2024-01-15T12:00:00Z");
        expect(differenceInMilliseconds(instant, instant)).toBe(0);
    });

    it("handles sub-second precision", () => {
        const left = Temporal.Instant.from("2024-01-15T14:00:00.500Z");
        const right = Temporal.Instant.from("2024-01-15T14:00:00.200Z");
        expect(differenceInMilliseconds(left, right)).toBe(300);
    });

    it("works with ZonedDateTime inputs", () => {
        const left = Temporal.ZonedDateTime.from(
            "2024-01-15T14:00:01[America/New_York]",
        );
        const right = Temporal.ZonedDateTime.from(
            "2024-01-15T14:00:00[America/New_York]",
        );
        expect(differenceInMilliseconds(left, right)).toBe(1000);
    });
});
