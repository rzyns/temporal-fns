import { closestIndexTo } from "./index.js";

describe("closestIndexTo", () => {
  it("returns the index of the closest date", () => {
    const target = Temporal.PlainDate.from("2024-01-15");
    const dates = [
      Temporal.PlainDate.from("2024-01-10"),
      Temporal.PlainDate.from("2024-01-14"),
      Temporal.PlainDate.from("2024-01-20"),
    ];
    const result = closestIndexTo(target, dates);
    expect(result).toBe(1);
  });

  it("returns -1 for an empty array", () => {
    const target = Temporal.PlainDate.from("2024-01-15");
    const result = closestIndexTo(target, []);
    expect(result).toBe(-1);
  });

  it("returns the first index when equidistant", () => {
    const target = Temporal.PlainDate.from("2024-01-15");
    const dates = [
      Temporal.PlainDate.from("2024-01-13"), // 2 days before
      Temporal.PlainDate.from("2024-01-17"), // 2 days after
    ];
    const result = closestIndexTo(target, dates);
    expect(result).toBe(0);
  });

  it("works with multiple dates and picks the correct index", () => {
    const target = Temporal.PlainDate.from("2024-06-15");
    const dates = [
      Temporal.PlainDate.from("2024-01-01"),
      Temporal.PlainDate.from("2024-03-15"),
      Temporal.PlainDate.from("2024-06-10"),
      Temporal.PlainDate.from("2024-09-01"),
      Temporal.PlainDate.from("2024-12-31"),
    ];
    const result = closestIndexTo(target, dates);
    expect(result).toBe(2); // 2024-06-10 is closest (5 days away)
  });

  it("works with ZonedDateTime", () => {
    const target = Temporal.ZonedDateTime.from("2024-01-15T12:00:00[UTC]");
    const dates = [
      Temporal.ZonedDateTime.from("2024-01-10T12:00:00[UTC]"),
      Temporal.ZonedDateTime.from("2024-01-16T12:00:00[UTC]"),
    ];
    const result = closestIndexTo(target, dates);
    expect(result).toBe(1);
  });
});
