import { previousTuesday } from "./index.js";

describe("previousTuesday", () => {
  it("returns the previous Tuesday", () => {
    const wed = Temporal.PlainDate.from("2024-01-17"); // Wednesday
    const result = previousTuesday(wed);
    expect(result.toString()).toBe("2024-01-16");
    expect(result.dayOfWeek).toBe(2);
  });

  it("skips to prior week if already Tuesday", () => {
    const tue = Temporal.PlainDate.from("2024-01-16"); // Tuesday
    const result = previousTuesday(tue);
    expect(result.toString()).toBe("2024-01-09");
  });
});
