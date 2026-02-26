import { formatISODuration } from "./index.js";

describe("formatISODuration", () => {
  it("formats a simple duration", () => {
    const d = Temporal.Duration.from({ days: 5 });
    expect(formatISODuration(d)).toBe("P5D");
  });

  it("formats a complex duration", () => {
    const d = Temporal.Duration.from({
      years: 1,
      months: 2,
      days: 3,
      hours: 4,
    });
    expect(formatISODuration(d)).toBe("P1Y2M3DT4H");
  });

  it("formats a zero duration", () => {
    const d = Temporal.Duration.from("PT0S");
    expect(formatISODuration(d)).toBe("PT0S");
  });
});
