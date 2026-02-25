import { nextMonday } from "./index.js";

describe("nextMonday", () => {
  it("returns the next Monday", () => {
    const wed = Temporal.PlainDate.from("2024-01-17"); // Wednesday
    const result = nextMonday(wed);
    expect(result.toString()).toBe("2024-01-22");
    expect(result.dayOfWeek).toBe(1);
  });

  it("skips to next week if already Monday", () => {
    const mon = Temporal.PlainDate.from("2024-01-15"); // Monday
    const result = nextMonday(mon);
    expect(result.toString()).toBe("2024-01-22");
  });
});
