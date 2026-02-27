import { getDaysInYear } from "./index.js";

describe("getDaysInYear", () => {
    it("returns 366 for a leap year", () => {
        const date = Temporal.PlainDate.from("2024-06-15");
        expect(getDaysInYear(date)).toBe(366);
    });

    it("returns 365 for a non-leap year", () => {
        const date = Temporal.PlainDate.from("2023-06-15");
        expect(getDaysInYear(date)).toBe(365);
    });

    it("works with PlainDateTime", () => {
        const dt = Temporal.PlainDateTime.from("2000-01-01T00:00:00");
        expect(getDaysInYear(dt)).toBe(366); // 2000 is a leap year
    });

    it("works with ZonedDateTime", () => {
        const zdt = Temporal.ZonedDateTime.from(
            "2100-06-15T10:30:00[America/New_York]",
        );
        expect(getDaysInYear(zdt)).toBe(365); // 2100 is not a leap year
    });

    it("returns 366 for year 2000 (divisible by 400)", () => {
        const date = Temporal.PlainDate.from("2000-03-01");
        expect(getDaysInYear(date)).toBe(366);
    });
});
