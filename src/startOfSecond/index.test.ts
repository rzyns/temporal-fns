import { startOfSecond } from "./index.js";

describe("startOfSecond", () => {
  it("sets sub-second fields to zero for PlainDateTime", () => {
    const dt = Temporal.PlainDateTime.from("2024-06-15T14:35:45.123456789");
    const result = startOfSecond(dt);
    expect(result.toString()).toBe("2024-06-15T14:35:45");
  });

  it("sets sub-second fields to zero for ZonedDateTime", () => {
    const zdt = Temporal.ZonedDateTime.from("2024-06-15T14:35:45.123456789[America/New_York]");
    const result = startOfSecond(zdt);
    expect(result.second).toBe(45);
    expect(result.millisecond).toBe(0);
    expect(result.microsecond).toBe(0);
    expect(result.nanosecond).toBe(0);
  });

  it("preserves already-start-of-second", () => {
    const dt = Temporal.PlainDateTime.from("2024-06-15T14:35:45");
    const result = startOfSecond(dt);
    expect(result.toString()).toBe("2024-06-15T14:35:45");
  });
});
