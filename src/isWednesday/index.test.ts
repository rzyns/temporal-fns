import { isWednesday } from "./index.js";

describe("isWednesday", () => {
  it("returns true for a Wednesday", () => {
    const date = Temporal.PlainDate.from("2024-06-12"); // Wednesday
    expect(isWednesday(date)).toBe(true);
  });

  it("returns false for a non-Wednesday", () => {
    const date = Temporal.PlainDate.from("2024-06-13"); // Thursday
    expect(isWednesday(date)).toBe(false);
  });

  it("works with ZonedDateTime", () => {
    const date = Temporal.ZonedDateTime.from(
      "2024-06-12T12:00:00[Europe/London]",
    );
    expect(isWednesday(date)).toBe(true);
  });
});
