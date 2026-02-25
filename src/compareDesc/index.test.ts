import { compareDesc } from "./index.js";

describe("compareDesc", () => {
  it("returns 1 when left date is before right date", () => {
    const left = Temporal.PlainDate.from("2024-01-15");
    const right = Temporal.PlainDate.from("2024-06-20");
    expect(compareDesc(left, right)).toBe(1);
  });

  it("returns -1 when left date is after right date", () => {
    const left = Temporal.PlainDate.from("2024-06-20");
    const right = Temporal.PlainDate.from("2024-01-15");
    expect(compareDesc(left, right)).toBe(-1);
  });

  it("returns 0 when dates are equal", () => {
    const left = Temporal.PlainDate.from("2024-01-15");
    const right = Temporal.PlainDate.from("2024-01-15");
    expect(compareDesc(left, right)).toBe(0);
  });

  it("works with PlainDateTime", () => {
    const left = Temporal.PlainDateTime.from("2024-01-15T08:00:00");
    const right = Temporal.PlainDateTime.from("2024-01-15T16:30:00");
    expect(compareDesc(left, right)).toBe(1);
  });

  it("works with ZonedDateTime", () => {
    const left = Temporal.ZonedDateTime.from(
      "2024-06-20T12:00:00[America/New_York]",
    );
    const right = Temporal.ZonedDateTime.from(
      "2024-01-15T12:00:00[America/New_York]",
    );
    expect(compareDesc(left, right)).toBe(-1);
  });
});
