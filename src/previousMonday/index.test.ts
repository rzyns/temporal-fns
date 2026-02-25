import { previousMonday } from "./index.js";

describe("previousMonday", () => {
  it("returns the previous Monday", () => {
    const wed = Temporal.PlainDate.from("2024-01-17"); // Wednesday
    const result = previousMonday(wed);
    expect(result.toString()).toBe("2024-01-15");
    expect(result.dayOfWeek).toBe(1);
  });

  it("skips to prior week if already Monday", () => {
    const mon = Temporal.PlainDate.from("2024-01-15"); // Monday
    const result = previousMonday(mon);
    expect(result.toString()).toBe("2024-01-08");
  });
});
