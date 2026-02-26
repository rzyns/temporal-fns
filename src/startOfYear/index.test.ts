import { startOfYear } from "./index.js";

describe("startOfYear", () => {
  it("sets month and day to Jan 1 for PlainDate", () => {
    const date = Temporal.PlainDate.from("2024-06-15");
    const result = startOfYear(date);
    expect(result.toString()).toBe("2024-01-01");
  });

  it("sets to Jan 1 midnight for PlainDateTime", () => {
    const dt = Temporal.PlainDateTime.from("2024-06-15T14:30:00");
    const result = startOfYear(dt);
    expect(result.toString()).toBe("2024-01-01T00:00:00");
  });

  it("sets to Jan 1 midnight for ZonedDateTime", () => {
    const zdt = Temporal.ZonedDateTime.from(
      "2024-06-15T14:30:00[America/New_York]",
    );
    const result = startOfYear(zdt);
    expect(result.month).toBe(1);
    expect(result.day).toBe(1);
    expect(result.hour).toBe(0);
  });

  it("handles already Jan 1", () => {
    const date = Temporal.PlainDate.from("2024-01-01");
    const result = startOfYear(date);
    expect(result.toString()).toBe("2024-01-01");
  });
});
