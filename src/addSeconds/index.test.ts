import { addSeconds } from "./index.js";

describe("addSeconds", () => {
    it("adds seconds to a PlainTime", () => {
        const time = Temporal.PlainTime.from("10:00:00");
        const result = addSeconds(time, 30);
        expect(result.toString()).toBe("10:00:30");
    });

    it("adds seconds to a PlainDateTime", () => {
        const dt = Temporal.PlainDateTime.from("2024-01-15T10:00:00");
        const result = addSeconds(dt, 3661);
        expect(result.toString()).toBe("2024-01-15T11:01:01");
    });

    it("adds seconds to a ZonedDateTime", () => {
        const zdt = Temporal.ZonedDateTime.from("2024-01-15T10:00:00[UTC]");
        const result = addSeconds(zdt, 120);
        expect(result.minute).toBe(2);
        expect(result.second).toBe(0);
    });

    it("crosses minute boundary", () => {
        const time = Temporal.PlainTime.from("10:00:45");
        const result = addSeconds(time, 30);
        expect(result.toString()).toBe("10:01:15");
    });
});
