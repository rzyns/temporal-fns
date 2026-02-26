import { startOfDay } from "./index.js";

describe("startOfDay", () => {
  it("returns the same PlainDate unchanged", () => {
    const date = Temporal.PlainDate.from("2024-06-15");
    const result = startOfDay(date);
    expect(result.toString()).toBe("2024-06-15");
  });

  it("sets time to midnight for PlainDateTime", () => {
    const dt = Temporal.PlainDateTime.from("2024-06-15T14:30:45.123456789");
    const result = startOfDay(dt);
    expect(result.toString()).toBe("2024-06-15T00:00:00");
  });

  it("sets time to midnight for ZonedDateTime", () => {
    const zdt = Temporal.ZonedDateTime.from(
      "2024-06-15T14:30:45[America/New_York]",
    );
    const result = startOfDay(zdt);
    expect(result.hour).toBe(0);
    expect(result.minute).toBe(0);
    expect(result.second).toBe(0);
    expect(result.day).toBe(15);
  });

  it("preserves midnight PlainDateTime as-is", () => {
    const dt = Temporal.PlainDateTime.from("2024-01-01T00:00:00");
    const result = startOfDay(dt);
    expect(result.toString()).toBe("2024-01-01T00:00:00");
  });
});
