import { areIntervalsOverlapping } from "./index.js";

describe("areIntervalsOverlapping", () => {
  it("returns true when intervals overlap", () => {
    const intervalA = {
      start: Temporal.PlainDate.from("2024-01-01"),
      end: Temporal.PlainDate.from("2024-01-10"),
    };
    const intervalB = {
      start: Temporal.PlainDate.from("2024-01-05"),
      end: Temporal.PlainDate.from("2024-01-15"),
    };
    expect(areIntervalsOverlapping(intervalA, intervalB)).toBe(true);
  });

  it("returns false when intervals do not overlap", () => {
    const intervalA = {
      start: Temporal.PlainDate.from("2024-01-01"),
      end: Temporal.PlainDate.from("2024-01-05"),
    };
    const intervalB = {
      start: Temporal.PlainDate.from("2024-01-10"),
      end: Temporal.PlainDate.from("2024-01-15"),
    };
    expect(areIntervalsOverlapping(intervalA, intervalB)).toBe(false);
  });

  it("returns false when intervals share an endpoint (non-inclusive)", () => {
    const intervalA = {
      start: Temporal.PlainDate.from("2024-01-01"),
      end: Temporal.PlainDate.from("2024-01-10"),
    };
    const intervalB = {
      start: Temporal.PlainDate.from("2024-01-10"),
      end: Temporal.PlainDate.from("2024-01-15"),
    };
    expect(areIntervalsOverlapping(intervalA, intervalB)).toBe(false);
  });

  it("returns true when intervals share an endpoint (inclusive)", () => {
    const intervalA = {
      start: Temporal.PlainDate.from("2024-01-01"),
      end: Temporal.PlainDate.from("2024-01-10"),
    };
    const intervalB = {
      start: Temporal.PlainDate.from("2024-01-10"),
      end: Temporal.PlainDate.from("2024-01-15"),
    };
    expect(areIntervalsOverlapping(intervalA, intervalB, { inclusive: true })).toBe(true);
  });

  it("returns true when one interval fully contains the other", () => {
    const intervalA = {
      start: Temporal.PlainDate.from("2024-01-01"),
      end: Temporal.PlainDate.from("2024-01-31"),
    };
    const intervalB = {
      start: Temporal.PlainDate.from("2024-01-10"),
      end: Temporal.PlainDate.from("2024-01-20"),
    };
    expect(areIntervalsOverlapping(intervalA, intervalB)).toBe(true);
  });

  it("works with PlainDateTime", () => {
    const intervalA = {
      start: Temporal.PlainDateTime.from("2024-01-01T08:00:00"),
      end: Temporal.PlainDateTime.from("2024-01-01T12:00:00"),
    };
    const intervalB = {
      start: Temporal.PlainDateTime.from("2024-01-01T10:00:00"),
      end: Temporal.PlainDateTime.from("2024-01-01T14:00:00"),
    };
    expect(areIntervalsOverlapping(intervalA, intervalB)).toBe(true);
  });
});
