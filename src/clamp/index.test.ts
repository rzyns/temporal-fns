import { clamp } from "./index.js";

describe("clamp", () => {
  it("returns the date when it is within the interval", () => {
    const date = Temporal.PlainDate.from("2024-01-15");
    const interval = {
      start: Temporal.PlainDate.from("2024-01-01"),
      end: Temporal.PlainDate.from("2024-01-31"),
    };
    expect(clamp(date, interval).toString()).toBe("2024-01-15");
  });

  it("returns the interval start when the date is before the interval", () => {
    const date = Temporal.PlainDate.from("2023-12-01");
    const interval = {
      start: Temporal.PlainDate.from("2024-01-01"),
      end: Temporal.PlainDate.from("2024-01-31"),
    };
    expect(clamp(date, interval).toString()).toBe("2024-01-01");
  });

  it("returns the interval end when the date is after the interval", () => {
    const date = Temporal.PlainDate.from("2024-03-01");
    const interval = {
      start: Temporal.PlainDate.from("2024-01-01"),
      end: Temporal.PlainDate.from("2024-01-31"),
    };
    expect(clamp(date, interval).toString()).toBe("2024-01-31");
  });

  it("returns the date when it equals the start of the interval", () => {
    const date = Temporal.PlainDate.from("2024-01-01");
    const interval = {
      start: Temporal.PlainDate.from("2024-01-01"),
      end: Temporal.PlainDate.from("2024-01-31"),
    };
    expect(clamp(date, interval).toString()).toBe("2024-01-01");
  });

  it("returns the date when it equals the end of the interval", () => {
    const date = Temporal.PlainDate.from("2024-01-31");
    const interval = {
      start: Temporal.PlainDate.from("2024-01-01"),
      end: Temporal.PlainDate.from("2024-01-31"),
    };
    expect(clamp(date, interval).toString()).toBe("2024-01-31");
  });

  it("works with PlainDateTime", () => {
    const date = Temporal.PlainDateTime.from("2024-01-15T20:00:00");
    const interval = {
      start: Temporal.PlainDateTime.from("2024-01-15T08:00:00"),
      end: Temporal.PlainDateTime.from("2024-01-15T17:00:00"),
    };
    expect(clamp(date, interval).toString()).toBe("2024-01-15T17:00:00");
  });
});
