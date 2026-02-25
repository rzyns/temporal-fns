import { isInstant } from "./index.js";

describe("isInstant", () => {
  it("returns true for Instant", () => {
    const instant = Temporal.Instant.from("2024-01-01T00:00:00Z");
    expect(isInstant(instant)).toBe(true);
  });

  it("returns true for Instant from epoch", () => {
    const instant = Temporal.Instant.fromEpochMilliseconds(0);
    expect(isInstant(instant)).toBe(true);
  });

  it("returns false for ZonedDateTime", () => {
    const zdt = Temporal.ZonedDateTime.from("2024-06-15T10:30:00[UTC]");
    expect(isInstant(zdt)).toBe(false);
  });

  it("returns false for PlainDateTime", () => {
    const pdt = Temporal.PlainDateTime.from("2024-06-15T10:30:00");
    expect(isInstant(pdt)).toBe(false);
  });

  it("returns false for non-Temporal values", () => {
    expect(isInstant(null)).toBe(false);
    expect(isInstant("2024-01-01T00:00:00Z")).toBe(false);
    expect(isInstant(new Date())).toBe(false);
    expect(isInstant(42)).toBe(false);
    expect(isInstant(undefined)).toBe(false);
  });
});
