import { endOfWeek } from "./index.js";

describe("endOfWeek", () => {
  it("returns Sunday for a Wednesday PlainDate (default weekStartsOn=1)", () => {
    // 2024-06-12 is Wednesday
    const date = Temporal.PlainDate.from("2024-06-12");
    const result = endOfWeek(date);
    expect(result.toString()).toBe("2024-06-16"); // Sunday
  });

  it("returns Saturday when weekStartsOn=7", () => {
    // 2024-06-12 is Wednesday
    const date = Temporal.PlainDate.from("2024-06-12");
    const result = endOfWeek(date, { weekStartsOn: 7 });
    expect(result.toString()).toBe("2024-06-15"); // Saturday
  });

  it("sets time to end of day for PlainDateTime", () => {
    const dt = Temporal.PlainDateTime.from("2024-06-12T14:30:00");
    const result = endOfWeek(dt);
    expect(result.toString()).toBe("2024-06-16T23:59:59.999999999");
  });

  it("sets time to end of day for ZonedDateTime", () => {
    const zdt = Temporal.ZonedDateTime.from("2024-06-12T14:30:00[America/New_York]");
    const result = endOfWeek(zdt);
    expect(result.dayOfWeek).toBe(7);
    expect(result.hour).toBe(23);
    expect(result.minute).toBe(59);
    expect(result.second).toBe(59);
  });
});
