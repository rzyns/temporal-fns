import { nextWednesday } from "./index.js";

describe("nextWednesday", () => {
  it("returns the next Wednesday", () => {
    const thu = Temporal.PlainDate.from("2024-01-18"); // Thursday
    const result = nextWednesday(thu);
    expect(result.toString()).toBe("2024-01-24");
    expect(result.dayOfWeek).toBe(3);
  });

  it("skips to next week if already Wednesday", () => {
    const wed = Temporal.PlainDate.from("2024-01-17"); // Wednesday
    const result = nextWednesday(wed);
    expect(result.toString()).toBe("2024-01-24");
  });
});
