import { endOfQuarter } from "./index.js";

describe("endOfQuarter", () => {
    it("returns end of Q1 (March 31) for February PlainDate", () => {
        const date = Temporal.PlainDate.from("2024-02-15");
        const result = endOfQuarter(date);
        expect(result.toString()).toBe("2024-03-31");
    });

    it("returns end of Q2 (June 30) for May PlainDate", () => {
        const date = Temporal.PlainDate.from("2024-05-20");
        const result = endOfQuarter(date);
        expect(result.toString()).toBe("2024-06-30");
    });

    it("returns end of Q3 with end of day for PlainDateTime", () => {
        const dt = Temporal.PlainDateTime.from("2024-08-15T14:30:00");
        const result = endOfQuarter(dt);
        expect(result.toString()).toBe("2024-09-30T23:59:59.999999999");
    });

    it("returns end of Q4 (December 31) for ZonedDateTime", () => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-12-25T10:00:00[America/New_York]",
        );
        const result = endOfQuarter(zdt);
        expect(result.month).toBe(12);
        expect(result.day).toBe(31);
        expect(result.hour).toBe(23);
        expect(result.minute).toBe(59);
    });

    it("handles already at end of quarter", () => {
        const date = Temporal.PlainDate.from("2024-03-31");
        const result = endOfQuarter(date);
        expect(result.toString()).toBe("2024-03-31");
    });
});
