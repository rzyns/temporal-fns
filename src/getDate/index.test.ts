import { getDate } from "./index.js";

describe("getDate", () => {
  it("returns the day of the month of a PlainDate", () => {
    const date = Temporal.PlainDate.from("2024-06-15");
    expect(getDate(date)).toBe(15);
  });

  it("returns the day of the month of a PlainDateTime", () => {
    const dt = Temporal.PlainDateTime.from("2024-01-31T10:30:00");
    expect(getDate(dt)).toBe(31);
  });

  it("returns the day of the month of a ZonedDateTime", () => {
    const zdt = Temporal.ZonedDateTime.from(
      "2024-12-25T10:30:00[America/New_York]",
    );
    expect(getDate(zdt)).toBe(25);
  });

  it("returns 1 for the first day of the month", () => {
    const date = Temporal.PlainDate.from("2024-03-01");
    expect(getDate(date)).toBe(1);
  });

  it("returns 29 for Feb 29 in a leap year", () => {
    const date = Temporal.PlainDate.from("2024-02-29");
    expect(getDate(date)).toBe(29);
  });
});
