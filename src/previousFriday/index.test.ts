import { previousFriday } from "./index.js";

describe("previousFriday", () => {
  it("returns the previous Friday", () => {
    const wed = Temporal.PlainDate.from("2024-01-17"); // Wednesday
    const result = previousFriday(wed);
    expect(result.toString()).toBe("2024-01-12");
    expect(result.dayOfWeek).toBe(5);
  });

  it("skips to prior week if already Friday", () => {
    const fri = Temporal.PlainDate.from("2024-01-19"); // Friday
    const result = previousFriday(fri);
    expect(result.toString()).toBe("2024-01-12");
  });
});
