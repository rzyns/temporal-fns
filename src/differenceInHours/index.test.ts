import { differenceInHours } from "./index.js";

describe("differenceInHours", () => {
  it("returns the number of hours between two PlainDateTimes", () => {
    const left = Temporal.PlainDateTime.from("2024-01-15T14:00:00");
    const right = Temporal.PlainDateTime.from("2024-01-15T08:00:00");
    expect(differenceInHours(left, right)).toBe(6);
  });

  it("returns a negative number when dateLeft is before dateRight", () => {
    const left = Temporal.PlainDateTime.from("2024-01-15T08:00:00");
    const right = Temporal.PlainDateTime.from("2024-01-15T14:00:00");
    expect(differenceInHours(left, right)).toBe(-6);
  });

  it("returns 0 for the same datetime", () => {
    const dt = Temporal.PlainDateTime.from("2024-01-15T12:00:00");
    expect(differenceInHours(dt, dt)).toBe(0);
  });

  it("truncates partial hours", () => {
    const left = Temporal.PlainDateTime.from("2024-01-15T14:45:00");
    const right = Temporal.PlainDateTime.from("2024-01-15T12:00:00");
    expect(differenceInHours(left, right)).toBe(2);
  });

  it("works with ZonedDateTime inputs using epoch-based calculation", () => {
    const left = Temporal.ZonedDateTime.from(
      "2024-03-10T12:00:00[America/New_York]",
    );
    const right = Temporal.ZonedDateTime.from(
      "2024-03-10T00:00:00[America/New_York]",
    );
    // DST spring forward happens at 2am, so wall clock loses an hour but epoch is accurate
    expect(differenceInHours(left, right)).toBe(11);
  });
});
