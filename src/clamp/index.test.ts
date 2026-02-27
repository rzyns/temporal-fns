import { describe } from "vitest";
import { clamp } from "./index.js";

describe("clamp", (it) => {
    it("returns the date when it is within the interval", ({ expect }) => {
        const date = Temporal.PlainDate.from("2024-01-15");
        const interval = {
            start: Temporal.PlainDate.from("2024-01-01"),
            end: Temporal.PlainDate.from("2024-01-31"),
        };
        expect(clamp(date, interval).toString()).toBe("2024-01-15");
    });

    it("returns the interval start when the date is before the interval", ({
        expect,
    }) => {
        const date = Temporal.PlainDate.from("2023-12-01");
        const interval = {
            start: Temporal.PlainDate.from("2024-01-01"),
            end: Temporal.PlainDate.from("2024-01-31"),
        };
        expect(clamp(date, interval).toString()).toBe("2024-01-01");
    });

    it("returns the interval end when the date is after the interval", ({
        expect,
    }) => {
        const date = Temporal.PlainDate.from("2024-03-01");
        const interval = {
            start: Temporal.PlainDate.from("2024-01-01"),
            end: Temporal.PlainDate.from("2024-01-31"),
        };
        expect(clamp(date, interval).toString()).toBe("2024-01-31");
    });

    it("returns the date when it equals the start of the interval", ({
        expect,
    }) => {
        const date = Temporal.PlainDate.from("2024-01-01");
        const interval = {
            start: Temporal.PlainDate.from("2024-01-01"),
            end: Temporal.PlainDate.from("2024-01-31"),
        };
        expect(clamp(date, interval).toString()).toBe("2024-01-01");
    });

    it("returns the date when it equals the end of the interval", ({
        expect,
    }) => {
        const date = Temporal.PlainDate.from("2024-01-31");
        const interval = {
            start: Temporal.PlainDate.from("2024-01-01"),
            end: Temporal.PlainDate.from("2024-01-31"),
        };
        expect(clamp(date, interval).toString()).toBe("2024-01-31");
    });

    it("works with PlainDateTime", ({ expect }) => {
        const date = Temporal.PlainDateTime.from("2024-01-15T20:00:00");
        const interval = {
            start: Temporal.PlainDateTime.from("2024-01-15T08:00:00"),
            end: Temporal.PlainDateTime.from("2024-01-15T17:00:00"),
        };
        expect(clamp(date, interval).toString()).toBe("2024-01-15T17:00:00");
    });

    it("clamps Instant within an Instant interval", ({ expect }) => {
        const date = Temporal.Instant.from("2024-01-15T12:00:00Z");
        const interval = {
            start: Temporal.Instant.from("2024-01-01T00:00:00Z"),
            end: Temporal.Instant.from("2024-01-31T23:59:59Z"),
        };
        expect(clamp(date, interval).toString()).toBe("2024-01-15T12:00:00Z");
    });

    it("clamps Instant to start when before interval", ({ expect }) => {
        const date = Temporal.Instant.from("2023-12-01T00:00:00Z");
        const interval = {
            start: Temporal.Instant.from("2024-01-01T00:00:00Z"),
            end: Temporal.Instant.from("2024-01-31T23:59:59Z"),
        };
        expect(clamp(date, interval).toString()).toBe("2024-01-01T00:00:00Z");
    });

    it("clamps Instant to end when after interval", ({ expect }) => {
        const date = Temporal.Instant.from("2024-03-01T00:00:00Z");
        const interval = {
            start: Temporal.Instant.from("2024-01-01T00:00:00Z"),
            end: Temporal.Instant.from("2024-01-31T23:59:59Z"),
        };
        expect(clamp(date, interval).toString()).toBe("2024-01-31T23:59:59Z");
    });
});
