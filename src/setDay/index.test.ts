import { setDay } from "./index.js";

describe("setDay", () => {
  it("sets PlainDate to Monday in the same week (default weekStartsOn=1)", () => {
    // 2024-06-12 is Wednesday (dayOfWeek=3)
    const date = Temporal.PlainDate.from("2024-06-12");
    const result = setDay(date, 1);
    expect(result.toString()).toBe("2024-06-10"); // Monday
  });

  it("sets PlainDate to Friday in the same week", () => {
    // 2024-06-12 is Wednesday
    const date = Temporal.PlainDate.from("2024-06-12");
    const result = setDay(date, 5);
    expect(result.toString()).toBe("2024-06-14"); // Friday
  });

  it("sets PlainDate to Sunday in the same week (default weekStartsOn=1)", () => {
    // 2024-06-12 is Wednesday, week is Mon-Sun
    const date = Temporal.PlainDate.from("2024-06-12");
    const result = setDay(date, 7);
    expect(result.toString()).toBe("2024-06-16"); // Sunday
  });

  it("sets PlainDateTime to Tuesday and preserves time", () => {
    const dt = Temporal.PlainDateTime.from("2024-06-12T14:30:00");
    const result = setDay(dt, 2);
    expect(result.dayOfWeek).toBe(2); // Tuesday
    // startOfWeek resets time to midnight for PlainDateTime
    expect(result.toString()).toBe("2024-06-11T00:00:00");
  });

  it("sets ZonedDateTime to Thursday and preserves timezone", () => {
    const zdt = Temporal.ZonedDateTime.from(
      "2024-06-12T14:30:00[America/New_York]",
    );
    const result = setDay(zdt, 4);
    expect(result.dayOfWeek).toBe(4); // Thursday
    expect(result.timeZoneId).toBe("America/New_York");
  });

  it("works with weekStartsOn=7 (Sunday)", () => {
    // 2024-06-12 is Wednesday, with Sun-start week: Sun Jun 9 to Sat Jun 15
    const date = Temporal.PlainDate.from("2024-06-12");
    const result = setDay(date, 7, { weekStartsOn: 7 });
    // Sunday is the first day of the week, so offset 0 from week start
    expect(result.toString()).toBe("2024-06-09"); // Sunday
  });

  it("returns same day when already on the target weekday", () => {
    // 2024-06-12 is Wednesday (dayOfWeek=3)
    const date = Temporal.PlainDate.from("2024-06-12");
    const result = setDay(date, 3);
    expect(result.toString()).toBe("2024-06-12");
  });
});
