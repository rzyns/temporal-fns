import { nextFriday } from "./index.js";

describe("nextFriday", () => {
  it("returns the next Friday", () => {
    const wed = Temporal.PlainDate.from("2024-01-17"); // Wednesday
    const result = nextFriday(wed);
    expect(result.toString()).toBe("2024-01-19");
    expect(result.dayOfWeek).toBe(5);
  });

  it("skips to next week if already Friday", () => {
    const fri = Temporal.PlainDate.from("2024-01-19"); // Friday
    const result = nextFriday(fri);
    expect(result.toString()).toBe("2024-01-26");
  });
});
