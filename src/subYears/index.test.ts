import { subYears } from "./index.js";

describe("subYears", () => {
    it("subtracts years from a PlainDate", () => {
        const date = Temporal.PlainDate.from("2024-06-15");
        const result = subYears(date, 2);
        expect(result.toString()).toBe("2022-06-15");
    });

    it("subtracts years from a PlainDateTime", () => {
        const dt = Temporal.PlainDateTime.from("2024-03-01T09:00:00");
        const result = subYears(dt, 5);
        expect(result.toString()).toBe("2019-03-01T09:00:00");
    });

    it("subtracts years from a ZonedDateTime", () => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-07-04T18:00:00[America/Chicago]",
        );
        const result = subYears(zdt, 1);
        expect(result.year).toBe(2023);
    });

    it("handles leap year date clamping", () => {
        const date = Temporal.PlainDate.from("2024-02-29");
        const result = subYears(date, 1);
        expect(result.toString()).toBe("2023-02-28");
    });
});
