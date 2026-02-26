import { addYears } from "./index.js";

describe("addYears", () => {
  it("adds years to a PlainDate", () => {
    const date = Temporal.PlainDate.from("2024-06-15");
    const result = addYears(date, 2);
    expect(result.toString()).toBe("2026-06-15");
  });

  it("adds years to a PlainDateTime", () => {
    const dt = Temporal.PlainDateTime.from("2024-03-01T09:00:00");
    const result = addYears(dt, 5);
    expect(result.toString()).toBe("2029-03-01T09:00:00");
  });

  it("adds years to a ZonedDateTime", () => {
    const zdt = Temporal.ZonedDateTime.from(
      "2024-07-04T18:00:00[America/Chicago]",
    );
    const result = addYears(zdt, 1);
    expect(result.year).toBe(2025);
    expect(result.month).toBe(7);
  });

  it("handles leap year date clamping", () => {
    const date = Temporal.PlainDate.from("2024-02-29");
    const result = addYears(date, 1);
    expect(result.toString()).toBe("2025-02-28");
  });
});
