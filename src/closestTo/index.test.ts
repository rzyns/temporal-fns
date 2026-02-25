import { closestTo } from "./index.js";

describe("closestTo", () => {
  it("returns the closest date from an array", () => {
    const target = Temporal.PlainDate.from("2024-01-15");
    const dates = [
      Temporal.PlainDate.from("2024-01-10"),
      Temporal.PlainDate.from("2024-01-14"),
      Temporal.PlainDate.from("2024-01-20"),
    ];
    const result = closestTo(target, dates);
    expect(result?.toString()).toBe("2024-01-14");
  });

  it("returns the first match when equidistant", () => {
    const target = Temporal.PlainDate.from("2024-01-15");
    const dates = [
      Temporal.PlainDate.from("2024-01-13"), // 2 days before
      Temporal.PlainDate.from("2024-01-17"), // 2 days after
    ];
    const result = closestTo(target, dates);
    expect(result?.toString()).toBe("2024-01-13");
  });

  it("returns undefined for an empty array", () => {
    const target = Temporal.PlainDate.from("2024-01-15");
    const result = closestTo(target, []);
    expect(result).toBeUndefined();
  });

  it("works with ZonedDateTime", () => {
    const target = Temporal.ZonedDateTime.from("2024-01-15T12:00:00[UTC]");
    const dates = [
      Temporal.ZonedDateTime.from("2024-01-10T12:00:00[UTC]"),
      Temporal.ZonedDateTime.from("2024-01-16T12:00:00[UTC]"),
    ];
    const result = closestTo(target, dates);
    expect(result?.day).toBe(16);
  });

  it("returns the exact match when present", () => {
    const target = Temporal.PlainDate.from("2024-01-15");
    const dates = [
      Temporal.PlainDate.from("2024-01-10"),
      Temporal.PlainDate.from("2024-01-15"),
      Temporal.PlainDate.from("2024-01-20"),
    ];
    const result = closestTo(target, dates);
    expect(result?.toString()).toBe("2024-01-15");
  });
});
