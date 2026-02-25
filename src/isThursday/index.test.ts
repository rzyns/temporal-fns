import { isThursday } from "./index.js";

describe("isThursday", () => {
  it("returns true for a Thursday", () => {
    const date = Temporal.PlainDate.from("2024-06-13"); // Thursday
    expect(isThursday(date)).toBe(true);
  });

  it("returns false for a non-Thursday", () => {
    const date = Temporal.PlainDate.from("2024-06-14"); // Friday
    expect(isThursday(date)).toBe(false);
  });

  it("works with PlainDateTime", () => {
    const date = Temporal.PlainDateTime.from("2024-06-13T08:30:00");
    expect(isThursday(date)).toBe(true);
  });
});
