import { withTimeZone } from "./index.js";

describe("withTimeZone", () => {
  it("changes the timezone of a ZonedDateTime", () => {
    const zdt = Temporal.ZonedDateTime.from("2024-06-15T10:30:00[UTC]");
    const result = withTimeZone(zdt, "America/New_York");
    expect(result.timeZoneId).toBe("America/New_York");
  });

  it("preserves the same instant in time", () => {
    const zdt = Temporal.ZonedDateTime.from("2024-06-15T10:30:00[UTC]");
    const result = withTimeZone(zdt, "America/New_York");
    // Same instant, different wall-clock time
    expect(result.epochMilliseconds).toBe(zdt.epochMilliseconds);
    expect(result.hour).toBe(6); // UTC-4 during summer
  });

  it("converts between non-UTC timezones", () => {
    const zdt = Temporal.ZonedDateTime.from("2024-06-15T10:00:00[America/New_York]");
    const result = withTimeZone(zdt, "Asia/Tokyo");
    expect(result.timeZoneId).toBe("Asia/Tokyo");
    expect(result.epochMilliseconds).toBe(zdt.epochMilliseconds);
  });

  it("handles same timezone (no-op)", () => {
    const zdt = Temporal.ZonedDateTime.from("2024-06-15T10:30:00[UTC]");
    const result = withTimeZone(zdt, "UTC");
    expect(result.timeZoneId).toBe("UTC");
    expect(result.hour).toBe(10);
    expect(result.minute).toBe(30);
  });
});
