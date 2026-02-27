import { differenceInWeeks } from "./index.js";

describe("differenceInWeeks", () => {
    it("returns the number of full weeks between two dates", () => {
        const left = Temporal.PlainDate.from("2024-01-29");
        const right = Temporal.PlainDate.from("2024-01-01");
        expect(differenceInWeeks(left, right)).toBe(4);
    });

    it("returns a negative number when dateLeft is before dateRight", () => {
        const left = Temporal.PlainDate.from("2024-01-01");
        const right = Temporal.PlainDate.from("2024-01-22");
        expect(differenceInWeeks(left, right)).toBe(-3);
    });

    it("returns 0 for dates less than a week apart", () => {
        const left = Temporal.PlainDate.from("2024-01-05");
        const right = Temporal.PlainDate.from("2024-01-01");
        expect(differenceInWeeks(left, right)).toBe(0);
    });

    it("returns 0 for the same date", () => {
        const date = Temporal.PlainDate.from("2024-06-15");
        expect(differenceInWeeks(date, date)).toBe(0);
    });

    it("works with ZonedDateTime inputs", () => {
        const left = Temporal.ZonedDateTime.from(
            "2024-02-12T10:00:00[America/New_York]",
        );
        const right = Temporal.ZonedDateTime.from(
            "2024-01-01T10:00:00[America/New_York]",
        );
        expect(differenceInWeeks(left, right)).toBe(6);
    });
});
