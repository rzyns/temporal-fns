import { endOfMinute } from "./index.js";

describe("endOfMinute", () => {
  it("sets to end of minute for PlainDateTime", () => {
    const dt = Temporal.PlainDateTime.from("2024-06-15T14:35:10");
    const result = endOfMinute(dt);
    expect(result.toString()).toBe("2024-06-15T14:35:59.999999999");
  });

  it("sets to end of minute for ZonedDateTime", () => {
    const zdt = Temporal.ZonedDateTime.from("2024-06-15T14:35:10[America/New_York]");
    const result = endOfMinute(zdt);
    expect(result.minute).toBe(35);
    expect(result.second).toBe(59);
    expect(result.millisecond).toBe(999);
    expect(result.microsecond).toBe(999);
    expect(result.nanosecond).toBe(999);
  });

  it("handles already end-of-minute", () => {
    const dt = Temporal.PlainDateTime.from("2024-06-15T14:35:59.999999999");
    const result = endOfMinute(dt);
    expect(result.toString()).toBe("2024-06-15T14:35:59.999999999");
  });
});
