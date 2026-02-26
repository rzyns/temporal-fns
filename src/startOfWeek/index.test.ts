import { startOfWeek } from "./index.js";

describe("startOfWeek", () => {
  it("returns Monday for a Wednesday PlainDate (default weekStartsOn=1)", () => {
    // 2024-06-12 is Wednesday (dayOfWeek=3)
    const date = Temporal.PlainDate.from("2024-06-12");
    const result = startOfWeek(date);
    expect(result.toString()).toBe("2024-06-10"); // Monday
  });

  it("returns Sunday when weekStartsOn=7", () => {
    // 2024-06-12 is Wednesday
    const date = Temporal.PlainDate.from("2024-06-12");
    const result = startOfWeek(date, { weekStartsOn: 7 });
    expect(result.toString()).toBe("2024-06-09"); // Sunday
  });

  it("returns same day if already at week start", () => {
    // 2024-06-10 is Monday
    const date = Temporal.PlainDate.from("2024-06-10");
    const result = startOfWeek(date);
    expect(result.toString()).toBe("2024-06-10");
  });

  it("sets time to midnight for PlainDateTime", () => {
    const dt = Temporal.PlainDateTime.from("2024-06-12T14:30:00");
    const result = startOfWeek(dt);
    expect(result.toString()).toBe("2024-06-10T00:00:00");
  });

  it("sets time to midnight for ZonedDateTime", () => {
    const zdt = Temporal.ZonedDateTime.from(
      "2024-06-12T14:30:00[America/New_York]",
    );
    const result = startOfWeek(zdt);
    expect(result.dayOfWeek).toBe(1);
    expect(result.hour).toBe(0);
    expect(result.minute).toBe(0);
  });
});
