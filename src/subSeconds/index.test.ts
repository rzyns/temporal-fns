import { describe } from "vitest";
import { subSeconds } from "./index.js";

describe("subSeconds", (it) => {
    it("subtracts seconds from a PlainTime", ({ expect }) => {
        const time = Temporal.PlainTime.from("10:00:30");
        const result = subSeconds(time, 30);
        expect(result.toString()).toBe("10:00:00");
    });

    it("subtracts seconds from a PlainDateTime", ({ expect }) => {
        const dt = Temporal.PlainDateTime.from("2024-01-15T11:01:01");
        const result = subSeconds(dt, 3661);
        expect(result.toString()).toBe("2024-01-15T10:00:00");
    });

    it("subtracts seconds from a ZonedDateTime", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from("2024-01-15T10:02:00[UTC]");
        const result = subSeconds(zdt, 120);
        expect(result.minute).toBe(0);
        expect(result.second).toBe(0);
    });

    it("crosses minute boundary backwards", ({ expect }) => {
        const time = Temporal.PlainTime.from("10:01:15");
        const result = subSeconds(time, 30);
        expect(result.toString()).toBe("10:00:45");
    });
});
