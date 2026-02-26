import { add } from "./index.js";

describe("add", () => {
  it("adds a Duration to a PlainDate", () => {
    const date = Temporal.PlainDate.from("2024-01-15");
    const duration = Temporal.Duration.from({ years: 1, months: 2, days: 3 });
    const result = add(date, duration);
    expect(result.toString()).toBe("2025-03-18");
  });

  it("adds a DurationLike to a PlainDateTime", () => {
    const dt = Temporal.PlainDateTime.from("2024-01-15T10:00:00");
    const result = add(dt, { days: 5, hours: 3, minutes: 30 });
    expect(result.toString()).toBe("2024-01-20T13:30:00");
  });

  it("adds a Duration to a ZonedDateTime", () => {
    const zdt = Temporal.ZonedDateTime.from("2024-01-15T10:00:00[UTC]");
    const duration = Temporal.Duration.from({ months: 6, days: 10 });
    const result = add(zdt, duration);
    expect(result.month).toBe(7);
    expect(result.day).toBe(25);
  });

  it("adds a DurationLike with only days to a PlainDate", () => {
    const date = Temporal.PlainDate.from("2024-12-25");
    const result = add(date, { days: 7 });
    expect(result.toString()).toBe("2025-01-01");
  });

  it("adds a complex duration to PlainDateTime", () => {
    const dt = Temporal.PlainDateTime.from("2024-06-15T12:00:00");
    const duration = Temporal.Duration.from({
      years: 1,
      months: 1,
      days: 1,
      hours: 1,
      minutes: 1,
      seconds: 1,
    });
    const result = add(dt, duration);
    expect(result.toString()).toBe("2025-07-16T13:01:01");
  });
});
