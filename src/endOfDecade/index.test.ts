import { endOfDecade } from "./index.js";

describe("endOfDecade", () => {
    it("returns end of decade for PlainDate", () => {
        const date = Temporal.PlainDate.from("2024-06-15");
        const result = endOfDecade(date);
        expect(result.toString()).toBe("2029-12-31");
    });

    it("returns end of decade for PlainDateTime with end of day", () => {
        const dt = Temporal.PlainDateTime.from("2024-06-15T14:30:00");
        const result = endOfDecade(dt);
        expect(result.toString()).toBe("2029-12-31T23:59:59.999999999");
    });

    it("returns end of decade for ZonedDateTime", () => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-06-15T14:30:00[America/New_York]",
        );
        const result = endOfDecade(zdt);
        expect(result.year).toBe(2029);
        expect(result.month).toBe(12);
        expect(result.day).toBe(31);
        expect(result.hour).toBe(23);
    });

    it("handles year at decade boundary", () => {
        const date = Temporal.PlainDate.from("2020-01-01");
        const result = endOfDecade(date);
        expect(result.toString()).toBe("2029-12-31");
    });
});
