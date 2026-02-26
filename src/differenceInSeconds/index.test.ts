import { differenceInSeconds } from "./index.js";

describe("differenceInSeconds", () => {
  it("returns the number of seconds between two PlainDateTimes", () => {
    const left = Temporal.PlainDateTime.from("2024-01-15T14:00:30");
    const right = Temporal.PlainDateTime.from("2024-01-15T14:00:00");
    expect(differenceInSeconds(left, right)).toBe(30);
  });

  it("returns a negative number when dateLeft is before dateRight", () => {
    const left = Temporal.PlainDateTime.from("2024-01-15T14:00:00");
    const right = Temporal.PlainDateTime.from("2024-01-15T14:01:00");
    expect(differenceInSeconds(left, right)).toBe(-60);
  });

  it("returns 0 for the same datetime", () => {
    const dt = Temporal.PlainDateTime.from("2024-01-15T12:00:00");
    expect(differenceInSeconds(dt, dt)).toBe(0);
  });

  it("handles large differences across days", () => {
    const left = Temporal.PlainDateTime.from("2024-01-16T00:00:00");
    const right = Temporal.PlainDateTime.from("2024-01-15T00:00:00");
    expect(differenceInSeconds(left, right)).toBe(86400);
  });

  it("works with ZonedDateTime inputs using epoch-based calculation", () => {
    const left = Temporal.ZonedDateTime.from(
      "2024-01-15T14:01:00[Europe/Berlin]",
    );
    const right = Temporal.ZonedDateTime.from(
      "2024-01-15T14:00:00[Europe/Berlin]",
    );
    expect(differenceInSeconds(left, right)).toBe(60);
  });
});
