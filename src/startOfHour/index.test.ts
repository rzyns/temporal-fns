import { startOfHour } from "./index.js";

describe("startOfHour", () => {
  it("sets minutes and below to zero for PlainDateTime", () => {
    const dt = Temporal.PlainDateTime.from("2024-06-15T14:35:45.123456789");
    const result = startOfHour(dt);
    expect(result.toString()).toBe("2024-06-15T14:00:00");
  });

  it("sets minutes and below to zero for ZonedDateTime", () => {
    const zdt = Temporal.ZonedDateTime.from("2024-06-15T14:35:45[America/New_York]");
    const result = startOfHour(zdt);
    expect(result.hour).toBe(14);
    expect(result.minute).toBe(0);
    expect(result.second).toBe(0);
  });

  it("preserves already-start-of-hour PlainDateTime", () => {
    const dt = Temporal.PlainDateTime.from("2024-06-15T14:00:00");
    const result = startOfHour(dt);
    expect(result.toString()).toBe("2024-06-15T14:00:00");
  });
});
