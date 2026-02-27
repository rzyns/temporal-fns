import { isBefore } from "./index.js";

describe("isBefore", () => {
    it("returns true when the first date is before the second", () => {
        const date = Temporal.PlainDate.from("2024-01-15");
        const dateToCompare = Temporal.PlainDate.from("2024-06-20");
        expect(isBefore(date, dateToCompare)).toBe(true);
    });

    it("returns false when the first date is after the second", () => {
        const date = Temporal.PlainDate.from("2024-06-20");
        const dateToCompare = Temporal.PlainDate.from("2024-01-15");
        expect(isBefore(date, dateToCompare)).toBe(false);
    });

    it("returns false when dates are equal", () => {
        const date = Temporal.PlainDate.from("2024-01-15");
        const dateToCompare = Temporal.PlainDate.from("2024-01-15");
        expect(isBefore(date, dateToCompare)).toBe(false);
    });

    it("works with PlainDateTime", () => {
        const date = Temporal.PlainDateTime.from("2024-01-15T08:00:00");
        const dateToCompare = Temporal.PlainDateTime.from(
            "2024-01-15T16:30:00",
        );
        expect(isBefore(date, dateToCompare)).toBe(true);
    });

    it("works with ZonedDateTime", () => {
        const date = Temporal.ZonedDateTime.from(
            "2024-01-15T12:00:00[America/New_York]",
        );
        const dateToCompare = Temporal.ZonedDateTime.from(
            "2024-06-20T12:00:00[America/New_York]",
        );
        expect(isBefore(date, dateToCompare)).toBe(true);
    });
});
