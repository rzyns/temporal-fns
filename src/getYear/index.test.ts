import { getYear } from "./index.js";

describe("getYear", () => {
    it("returns the year of a PlainDate", () => {
        const date = Temporal.PlainDate.from("2024-06-15");
        expect(getYear(date)).toBe(2024);
    });

    it("returns the year of a PlainDateTime", () => {
        const dt = Temporal.PlainDateTime.from("2024-06-15T10:30:00");
        expect(getYear(dt)).toBe(2024);
    });

    it("returns the year of a ZonedDateTime", () => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-06-15T10:30:00[America/New_York]",
        );
        expect(getYear(zdt)).toBe(2024);
    });

    it("handles negative years (BCE)", () => {
        const date = Temporal.PlainDate.from("-000100-01-01");
        expect(getYear(date)).toBe(-100);
    });
});
