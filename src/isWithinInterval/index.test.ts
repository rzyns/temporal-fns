import { isWithinInterval } from "./index.js";

describe("isWithinInterval", () => {
    it("returns true when date is within the interval", () => {
        const date = Temporal.PlainDate.from("2024-01-15");
        const interval = {
            start: Temporal.PlainDate.from("2024-01-01"),
            end: Temporal.PlainDate.from("2024-01-31"),
        };
        expect(isWithinInterval(date, interval)).toBe(true);
    });

    it("returns false when date is before the interval", () => {
        const date = Temporal.PlainDate.from("2023-12-31");
        const interval = {
            start: Temporal.PlainDate.from("2024-01-01"),
            end: Temporal.PlainDate.from("2024-01-31"),
        };
        expect(isWithinInterval(date, interval)).toBe(false);
    });

    it("returns false when date is after the interval", () => {
        const date = Temporal.PlainDate.from("2024-02-01");
        const interval = {
            start: Temporal.PlainDate.from("2024-01-01"),
            end: Temporal.PlainDate.from("2024-01-31"),
        };
        expect(isWithinInterval(date, interval)).toBe(false);
    });

    it("returns true when date equals the start of the interval", () => {
        const date = Temporal.PlainDate.from("2024-01-01");
        const interval = {
            start: Temporal.PlainDate.from("2024-01-01"),
            end: Temporal.PlainDate.from("2024-01-31"),
        };
        expect(isWithinInterval(date, interval)).toBe(true);
    });

    it("returns true when date equals the end of the interval", () => {
        const date = Temporal.PlainDate.from("2024-01-31");
        const interval = {
            start: Temporal.PlainDate.from("2024-01-01"),
            end: Temporal.PlainDate.from("2024-01-31"),
        };
        expect(isWithinInterval(date, interval)).toBe(true);
    });

    it("works with PlainDateTime", () => {
        const date = Temporal.PlainDateTime.from("2024-01-15T10:30:00");
        const interval = {
            start: Temporal.PlainDateTime.from("2024-01-15T08:00:00"),
            end: Temporal.PlainDateTime.from("2024-01-15T17:00:00"),
        };
        expect(isWithinInterval(date, interval)).toBe(true);
    });
});
