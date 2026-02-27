import { subSeconds } from "./index.js";

describe("subSeconds", () => {
    it("subtracts seconds from a PlainTime", () => {
        const time = Temporal.PlainTime.from("10:00:30");
        const result = subSeconds(time, 30);
        expect(result.toString()).toBe("10:00:00");
    });

    it("subtracts seconds from a PlainDateTime", () => {
        const dt = Temporal.PlainDateTime.from("2024-01-15T11:01:01");
        const result = subSeconds(dt, 3661);
        expect(result.toString()).toBe("2024-01-15T10:00:00");
    });

    it("subtracts seconds from a ZonedDateTime", () => {
        const zdt = Temporal.ZonedDateTime.from("2024-01-15T10:02:00[UTC]");
        const result = subSeconds(zdt, 120);
        expect(result.minute).toBe(0);
        expect(result.second).toBe(0);
    });

    it("crosses minute boundary backwards", () => {
        const time = Temporal.PlainTime.from("10:01:15");
        const result = subSeconds(time, 30);
        expect(result.toString()).toBe("10:00:45");
    });
});
