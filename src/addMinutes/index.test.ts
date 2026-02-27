import { addMinutes } from "./index.js";

describe("addMinutes", () => {
    it("adds minutes to a PlainTime", () => {
        const time = Temporal.PlainTime.from("10:15:00");
        const result = addMinutes(time, 30);
        expect(result.toString()).toBe("10:45:00");
    });

    it("adds minutes to a PlainDateTime", () => {
        const dt = Temporal.PlainDateTime.from("2024-01-15T10:00:00");
        const result = addMinutes(dt, 90);
        expect(result.toString()).toBe("2024-01-15T11:30:00");
    });

    it("adds minutes to a ZonedDateTime", () => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-01-15T10:00:00[Europe/Berlin]",
        );
        const result = addMinutes(zdt, 45);
        expect(result.minute).toBe(45);
    });

    it("crosses hour boundary", () => {
        const time = Temporal.PlainTime.from("10:50:00");
        const result = addMinutes(time, 20);
        expect(result.toString()).toBe("11:10:00");
    });
});
