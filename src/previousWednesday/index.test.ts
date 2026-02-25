import { previousWednesday } from "./index.js";

describe("previousWednesday", () => {
  it("returns the previous Wednesday", () => {
    const fri = Temporal.PlainDate.from("2024-01-19"); // Friday
    const result = previousWednesday(fri);
    expect(result.toString()).toBe("2024-01-17");
    expect(result.dayOfWeek).toBe(3);
  });

  it("skips to prior week if already Wednesday", () => {
    const wed = Temporal.PlainDate.from("2024-01-17"); // Wednesday
    const result = previousWednesday(wed);
    expect(result.toString()).toBe("2024-01-10");
  });
});
