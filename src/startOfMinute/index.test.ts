import { describe } from "vitest";
import { startOfMinute } from "./index.js";

describe("startOfMinute", (it) => {
    it("sets seconds and below to zero for PlainDateTime", ({ expect }) => {
        const dt = Temporal.PlainDateTime.from("2024-06-15T14:35:45.123456789");
        const result = startOfMinute(dt);
        expect(result.toString()).toBe("2024-06-15T14:35:00");
    });

    it("sets seconds and below to zero for ZonedDateTime", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-06-15T14:35:45[America/New_York]",
        );
        const result = startOfMinute(zdt);
        expect(result.minute).toBe(35);
        expect(result.second).toBe(0);
        expect(result.millisecond).toBe(0);
    });

    it("preserves already-start-of-minute", ({ expect }) => {
        const dt = Temporal.PlainDateTime.from("2024-06-15T14:35:00");
        const result = startOfMinute(dt);
        expect(result.toString()).toBe("2024-06-15T14:35:00");
    });
});
