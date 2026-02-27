import { describe } from "vitest";
import { addWeeks } from "./index.js";

describe("addWeeks", (it) => {
    it("adds weeks to a PlainDate", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-01-01");
        const result = addWeeks(date, 2);
        expect(result.toString()).toBe("2024-01-15");
    });

    it("adds weeks to a PlainDateTime", ({ expect }) => {
        const dt = Temporal.PlainDateTime.from("2024-03-01T14:00:00");
        const result = addWeeks(dt, 1);
        expect(result.toString()).toBe("2024-03-08T14:00:00");
    });

    it("adds weeks to a ZonedDateTime", ({ expect }) => {
        const zdt = Temporal.ZonedDateTime.from(
            "2024-06-01T10:00:00[Asia/Tokyo]",
        );
        const result = addWeeks(zdt, 4);
        expect(result.day).toBe(29);
        expect(result.month).toBe(6);
    });

    it("crosses month boundaries", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-01-25");
        const result = addWeeks(date, 2);
        expect(result.toString()).toBe("2024-02-08");
    });
});
