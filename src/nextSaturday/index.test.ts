import { nextSaturday } from "./index.js";

describe("nextSaturday", () => {
  it("returns the next Saturday", () => {
    const wed = Temporal.PlainDate.from("2024-01-17"); // Wednesday
    const result = nextSaturday(wed);
    expect(result.toString()).toBe("2024-01-20");
    expect(result.dayOfWeek).toBe(6);
  });

  it("skips to next week if already Saturday", () => {
    const sat = Temporal.PlainDate.from("2024-01-20"); // Saturday
    const result = nextSaturday(sat);
    expect(result.toString()).toBe("2024-01-27");
  });
});
