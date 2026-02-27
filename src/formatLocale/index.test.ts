import { describe } from "vitest";
import { formatLocale } from "./index.js";

describe("formatLocale", (it) => {
    it("formats a PlainDate with locale", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-06-15");
        const result = formatLocale(date, { dateStyle: "long" }, "en-US");
        expect(result).toContain("June");
        expect(result).toContain("2024");
    });

    it("formats a PlainDateTime", ({ expect }) => {
        const dt = Temporal.PlainDateTime.from("2024-06-15T10:30:00");
        const result = formatLocale(dt, { dateStyle: "short" }, "en-US");
        expect(result).toBeTruthy();
    });

    it("works without options", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-06-15");
        const result = formatLocale(date);
        expect(result).toBeTruthy();
    });
});
