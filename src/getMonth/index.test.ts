import { getMonth } from "./index.js";

describe("getMonth", () => {
    it("returns the month of a PlainDate", () => {
        const date = Temporal.PlainDate.from("2024-06-15");
        expect(getMonth(date)).toBe(6);
    });

    it("returns the month of a PlainDateTime", () => {
        const dt = Temporal.PlainDateTime.from("2024-01-15T10:30:00");
        expect(getMonth(dt)).toBe(1);
    });

    it("returns the month of a ZonedDateTime", () => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-12-25T10:30:00[America/New_York]",
        );
        expect(getMonth(zdt)).toBe(12);
    });

    it("returns 1 for January", () => {
        const date = Temporal.PlainDate.from("2024-01-01");
        expect(getMonth(date)).toBe(1);
    });
});
