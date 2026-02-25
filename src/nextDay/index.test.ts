import { nextDay } from "./index.js";

describe("nextDay", () => {
  it("finds the next Monday from a Wednesday", () => {
    const wed = Temporal.PlainDate.from("2024-01-17"); // Wednesday
    const result = nextDay(wed, 1);
    expect(result.toString()).toBe("2024-01-22");
    expect(result.dayOfWeek).toBe(1);
  });

  it("finds the next Wednesday from a Wednesday (goes to next week)", () => {
    const wed = Temporal.PlainDate.from("2024-01-17"); // Wednesday
    const result = nextDay(wed, 3);
    expect(result.toString()).toBe("2024-01-24");
  });

  it("crosses month boundary", () => {
    const date = Temporal.PlainDate.from("2024-01-29"); // Monday
    const result = nextDay(date, 5); // next Friday
    expect(result.toString()).toBe("2024-02-02");
    expect(result.dayOfWeek).toBe(5);
  });

  it("works with ZonedDateTime", () => {
    const zdt = Temporal.ZonedDateTime.from("2024-01-17T10:00:00[UTC]");
    const result = nextDay(zdt, 5); // next Friday
    expect(result.dayOfWeek).toBe(5);
    expect(result.day).toBe(19);
  });

  it("works with PlainDateTime", () => {
    const pdt = Temporal.PlainDateTime.from("2024-01-17T10:00:00");
    const result = nextDay(pdt, 7); // next Sunday
    expect(result.dayOfWeek).toBe(7);
    expect(result.day).toBe(21);
  });
});
