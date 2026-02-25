import { getQuarter } from "./index.js";

describe("getQuarter", () => {
  it("returns 1 for January", () => {
    const date = Temporal.PlainDate.from("2024-01-15");
    expect(getQuarter(date)).toBe(1);
  });

  it("returns 1 for March", () => {
    const date = Temporal.PlainDate.from("2024-03-31");
    expect(getQuarter(date)).toBe(1);
  });

  it("returns 2 for April", () => {
    const dt = Temporal.PlainDateTime.from("2024-04-01T00:00:00");
    expect(getQuarter(dt)).toBe(2);
  });

  it("returns 3 for July", () => {
    const date = Temporal.PlainDate.from("2024-07-01");
    expect(getQuarter(date)).toBe(3);
  });

  it("returns 4 for December", () => {
    const zdt = Temporal.ZonedDateTime.from("2024-12-31T23:59:59[America/New_York]");
    expect(getQuarter(zdt)).toBe(4);
  });

  it("returns 4 for October", () => {
    const date = Temporal.PlainDate.from("2024-10-01");
    expect(getQuarter(date)).toBe(4);
  });
});
