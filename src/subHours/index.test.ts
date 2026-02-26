import { subHours } from "./index.js";

describe("subHours", () => {
  it("subtracts hours from a PlainTime", () => {
    const time = Temporal.PlainTime.from("15:00:00");
    const result = subHours(time, 3);
    expect(result.toString()).toBe("12:00:00");
  });

  it("subtracts hours from a PlainDateTime", () => {
    const dt = Temporal.PlainDateTime.from("2024-01-15T15:00:00");
    const result = subHours(dt, 5);
    expect(result.toString()).toBe("2024-01-15T10:00:00");
  });

  it("subtracts hours from a ZonedDateTime", () => {
    const zdt = Temporal.ZonedDateTime.from(
      "2024-01-15T18:00:00[America/New_York]",
    );
    const result = subHours(zdt, 8);
    expect(result.hour).toBe(10);
  });

  it("crosses day boundary backwards on PlainDateTime", () => {
    const dt = Temporal.PlainDateTime.from("2024-01-15T03:00:00");
    const result = subHours(dt, 5);
    expect(result.toString()).toBe("2024-01-14T22:00:00");
  });
});
