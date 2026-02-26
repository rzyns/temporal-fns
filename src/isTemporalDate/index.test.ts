import { isTemporalDate } from "./index.js";

describe("isTemporalDate", () => {
  it("returns true for PlainDate", () => {
    expect(isTemporalDate(Temporal.PlainDate.from("2024-01-01"))).toBe(true);
  });

  it("returns true for PlainDateTime", () => {
    expect(
      isTemporalDate(Temporal.PlainDateTime.from("2024-01-01T10:00:00")),
    ).toBe(true);
  });

  it("returns true for ZonedDateTime", () => {
    expect(
      isTemporalDate(Temporal.ZonedDateTime.from("2024-01-01T10:00:00[UTC]")),
    ).toBe(true);
  });

  it("returns false for non-Temporal values", () => {
    expect(isTemporalDate(new Date())).toBe(false);
    expect(isTemporalDate("2024-01-01")).toBe(false);
    expect(isTemporalDate(null)).toBe(false);
    expect(isTemporalDate(42)).toBe(false);
  });

  it("returns false for Instant", () => {
    expect(isTemporalDate(Temporal.Instant.from("2024-01-01T00:00:00Z"))).toBe(
      false,
    );
  });

  it("returns false for PlainTime", () => {
    expect(isTemporalDate(Temporal.PlainTime.from("10:30:00"))).toBe(false);
  });

  it("returns false for undefined", () => {
    expect(isTemporalDate(undefined)).toBe(false);
  });
});
