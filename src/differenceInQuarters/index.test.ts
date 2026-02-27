import { differenceInQuarters } from "./index.js";

describe("differenceInQuarters", () => {
    it("returns the number of full quarters between two dates", () => {
        const left = Temporal.PlainDate.from("2024-10-01");
        const right = Temporal.PlainDate.from("2024-01-01");
        expect(differenceInQuarters(left, right)).toBe(3);
    });

    it("returns a negative number when dateLeft is before dateRight", () => {
        const left = Temporal.PlainDate.from("2024-01-01");
        const right = Temporal.PlainDate.from("2024-10-01");
        expect(differenceInQuarters(left, right)).toBe(-3);
    });

    it("returns 0 for dates in the same quarter", () => {
        const left = Temporal.PlainDate.from("2024-02-15");
        const right = Temporal.PlainDate.from("2024-01-01");
        expect(differenceInQuarters(left, right)).toBe(0);
    });

    it("truncates partial quarters", () => {
        const left = Temporal.PlainDate.from("2024-05-15");
        const right = Temporal.PlainDate.from("2024-01-01");
        // 4 full months = 1 full quarter
        expect(differenceInQuarters(left, right)).toBe(1);
    });

    it("works with ZonedDateTime inputs", () => {
        const left = Temporal.ZonedDateTime.from(
            "2025-01-01T00:00:00[America/New_York]",
        );
        const right = Temporal.ZonedDateTime.from(
            "2024-01-01T00:00:00[America/New_York]",
        );
        expect(differenceInQuarters(left, right)).toBe(4);
    });
});
