import { describe } from "vitest";
import { subMinutes } from "./index.js";

describe("subMinutes", (it) => {
    it("subtracts minutes from a PlainTime", ({ expect }) => {
        const time = Temporal.PlainTime.from("10:45:00");
        const result = subMinutes(time, 30);
        expect(result.toString()).toBe("10:15:00");
    });

    it("subtracts minutes from a PlainDateTime", ({ expect }) => {
        const dt = Temporal.PlainDateTime.from("2024-01-15T11:30:00");
        const result = subMinutes(dt, 90);
        expect(result.toString()).toBe("2024-01-15T10:00:00");
    });

    it("subtracts minutes from a ZonedDateTime", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-01-15T10:45:00[Europe/Berlin]",
        );
        const result = subMinutes(zdt, 45);
        expect(result.minute).toBe(0);
        expect(result.hour).toBe(10);
    });

    it("crosses hour boundary backwards", ({ expect }) => {
        const time = Temporal.PlainTime.from("11:10:00");
        const result = subMinutes(time, 20);
        expect(result.toString()).toBe("10:50:00");
    });
});
