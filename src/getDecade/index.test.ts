import { getDecade } from "./index.js";

describe("getDecade", () => {
  it("returns the decade of a PlainDate", () => {
    const date = Temporal.PlainDate.from("2024-06-15");
    expect(getDecade(date)).toBe(2020);
  });

  it("returns the decade of a PlainDateTime", () => {
    const dt = Temporal.PlainDateTime.from("1999-12-31T23:59:59");
    expect(getDecade(dt)).toBe(1990);
  });

  it("returns the decade of a ZonedDateTime", () => {
    const zdt = Temporal.ZonedDateTime.from(
      "2000-01-01T00:00:00[America/New_York]",
    );
    expect(getDecade(zdt)).toBe(2000);
  });

  it("returns the decade for the start of a decade", () => {
    const date = Temporal.PlainDate.from("2020-01-01");
    expect(getDecade(date)).toBe(2020);
  });

  it("returns the decade for the end of a decade", () => {
    const date = Temporal.PlainDate.from("2029-12-31");
    expect(getDecade(date)).toBe(2020);
  });
});
