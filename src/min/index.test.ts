import { min } from "./index.js";

describe("min", () => {
  it("returns the earliest PlainDate from an array", () => {
    const dates = [
      Temporal.PlainDate.from("2024-06-20"),
      Temporal.PlainDate.from("2024-01-15"),
      Temporal.PlainDate.from("2024-03-10"),
    ];
    const result = min(dates);
    expect(result.toString()).toBe("2024-01-15");
  });

  it("returns the earliest PlainDateTime from an array", () => {
    const dates = [
      Temporal.PlainDateTime.from("2024-01-15T16:30:00"),
      Temporal.PlainDateTime.from("2024-01-15T08:00:00"),
      Temporal.PlainDateTime.from("2024-01-15T12:00:00"),
    ];
    const result = min(dates);
    expect(result.toString()).toBe("2024-01-15T08:00:00");
  });

  it("returns the earliest ZonedDateTime from an array", () => {
    const dates = [
      Temporal.ZonedDateTime.from("2024-06-20T12:00:00[America/New_York]"),
      Temporal.ZonedDateTime.from("2024-01-15T08:00:00[America/New_York]"),
      Temporal.ZonedDateTime.from("2024-03-10T10:00:00[America/New_York]"),
    ];
    const result = min(dates);
    expect(result.toPlainDate().toString()).toBe("2024-01-15");
  });

  it("returns the single element for a single-element array", () => {
    const date = Temporal.PlainDate.from("2024-01-15");
    expect(min([date]).toString()).toBe("2024-01-15");
  });

  it("throws TypeError for an empty array", () => {
    expect(() => min([])).toThrow(TypeError);
    expect(() => min([])).toThrow("min requires at least one date");
  });
});
