import { sub } from "./index.js";

describe("sub", () => {
  it("subtracts a Duration from a PlainDate", () => {
    const date = Temporal.PlainDate.from("2025-03-18");
    const duration = Temporal.Duration.from({ years: 1, months: 2, days: 3 });
    const result = sub(date, duration);
    expect(result.toString()).toBe("2024-01-15");
  });

  it("subtracts a DurationLike from a PlainDateTime", () => {
    const dt = Temporal.PlainDateTime.from("2024-01-20T13:30:00");
    const result = sub(dt, { days: 5, hours: 3, minutes: 30 });
    expect(result.toString()).toBe("2024-01-15T10:00:00");
  });

  it("subtracts a Duration from a ZonedDateTime", () => {
    const zdt = Temporal.ZonedDateTime.from("2024-07-25T10:00:00[UTC]");
    const duration = Temporal.Duration.from({ months: 6, days: 10 });
    const result = sub(zdt, duration);
    expect(result.month).toBe(1);
    expect(result.day).toBe(15);
  });

  it("subtracts a DurationLike with only days from a PlainDate", () => {
    const date = Temporal.PlainDate.from("2025-01-01");
    const result = sub(date, { days: 7 });
    expect(result.toString()).toBe("2024-12-25");
  });

  it("subtracts a complex duration from PlainDateTime", () => {
    const dt = Temporal.PlainDateTime.from("2025-07-16T13:01:01");
    const duration = Temporal.Duration.from({ years: 1, months: 1, days: 1, hours: 1, minutes: 1, seconds: 1 });
    const result = sub(dt, duration);
    expect(result.toString()).toBe("2024-06-15T12:00:00");
  });
});
