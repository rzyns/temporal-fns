import { differenceInYears } from "./index.js";

describe("differenceInYears", () => {
  it("returns the number of full years between two dates", () => {
    const left = Temporal.PlainDate.from("2029-01-01");
    const right = Temporal.PlainDate.from("2024-01-01");
    expect(differenceInYears(left, right)).toBe(5);
  });

  it("returns a negative number when dateLeft is before dateRight", () => {
    const left = Temporal.PlainDate.from("2022-06-01");
    const right = Temporal.PlainDate.from("2024-06-01");
    expect(differenceInYears(left, right)).toBe(-2);
  });

  it("returns 0 for the same date", () => {
    const date = Temporal.PlainDate.from("2024-05-15");
    expect(differenceInYears(date, date)).toBe(0);
  });

  it("truncates partial years", () => {
    const left = Temporal.PlainDate.from("2025-06-01");
    const right = Temporal.PlainDate.from("2024-09-01");
    expect(differenceInYears(left, right)).toBe(0);
  });

  it("works with PlainDateTime inputs", () => {
    const left = Temporal.PlainDateTime.from("2027-08-20T14:00:00");
    const right = Temporal.PlainDateTime.from("2024-08-20T10:00:00");
    expect(differenceInYears(left, right)).toBe(3);
  });
});
