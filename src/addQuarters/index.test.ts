import { addQuarters } from "./index.js";

describe("addQuarters", () => {
  it("adds quarters to a PlainDate", () => {
    const date = Temporal.PlainDate.from("2024-01-15");
    const result = addQuarters(date, 1);
    expect(result.toString()).toBe("2024-04-15");
  });

  it("adds quarters to a PlainDateTime", () => {
    const dt = Temporal.PlainDateTime.from("2024-01-15T10:00:00");
    const result = addQuarters(dt, 2);
    expect(result.toString()).toBe("2024-07-15T10:00:00");
  });

  it("adds quarters to a ZonedDateTime", () => {
    const zdt = Temporal.ZonedDateTime.from("2024-01-01T00:00:00[America/New_York]");
    const result = addQuarters(zdt, 4);
    expect(result.year).toBe(2025);
    expect(result.month).toBe(1);
  });

  it("crosses year boundaries", () => {
    const date = Temporal.PlainDate.from("2024-10-01");
    const result = addQuarters(date, 2);
    expect(result.toString()).toBe("2025-04-01");
  });
});
