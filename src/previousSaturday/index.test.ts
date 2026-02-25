import { previousSaturday } from "./index.js";

describe("previousSaturday", () => {
  it("returns the previous Saturday", () => {
    const wed = Temporal.PlainDate.from("2024-01-17"); // Wednesday
    const result = previousSaturday(wed);
    expect(result.toString()).toBe("2024-01-13");
    expect(result.dayOfWeek).toBe(6);
  });

  it("skips to prior week if already Saturday", () => {
    const sat = Temporal.PlainDate.from("2024-01-20"); // Saturday
    const result = previousSaturday(sat);
    expect(result.toString()).toBe("2024-01-13");
  });
});
