import { toPlainDate } from "./index.js";

describe("toPlainDate", () => {
  it("converts PlainDateTime to PlainDate", () => {
    const pdt = Temporal.PlainDateTime.from("2024-06-15T10:30:00");
    const result = toPlainDate(pdt);
    expect(result instanceof Temporal.PlainDate).toBe(true);
    expect(result.year).toBe(2024);
    expect(result.month).toBe(6);
    expect(result.day).toBe(15);
  });

  it("converts ZonedDateTime to PlainDate", () => {
    const zdt = Temporal.ZonedDateTime.from("2024-06-15T10:30:00[America/New_York]");
    const result = toPlainDate(zdt);
    expect(result instanceof Temporal.PlainDate).toBe(true);
    expect(result.year).toBe(2024);
    expect(result.month).toBe(6);
    expect(result.day).toBe(15);
  });

  it("strips time information", () => {
    const pdt = Temporal.PlainDateTime.from("2024-12-31T23:59:59.999");
    const result = toPlainDate(pdt);
    expect(result.toString()).toBe("2024-12-31");
  });

  it("preserves calendar", () => {
    const pdt = Temporal.PlainDateTime.from("2024-06-15T10:30:00");
    const result = toPlainDate(pdt);
    expect(result.calendarId).toBe("iso8601");
  });
});
