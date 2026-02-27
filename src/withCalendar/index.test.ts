import { withCalendar } from "./index.js";

describe("withCalendar", () => {
    it("changes the calendar of a PlainDate", () => {
        const pd = Temporal.PlainDate.from("2024-06-15");
        const result = withCalendar(pd, "hebrew");
        expect(result instanceof Temporal.PlainDate).toBe(true);
        expect(result.calendarId).toBe("hebrew");
    });

    it("changes the calendar of a PlainDateTime", () => {
        const pdt = Temporal.PlainDateTime.from("2024-06-15T10:30:00");
        const result = withCalendar(pdt, "japanese");
        expect(result instanceof Temporal.PlainDateTime).toBe(true);
        expect(result.calendarId).toBe("japanese");
    });

    it("changes the calendar of a ZonedDateTime", () => {
        const zdt = Temporal.ZonedDateTime.from("2024-06-15T10:30:00[UTC]");
        const result = withCalendar(zdt, "chinese");
        expect(result instanceof Temporal.ZonedDateTime).toBe(true);
        expect(result.calendarId).toBe("chinese");
    });

    it("preserves the same date when switching calendars", () => {
        const pd = Temporal.PlainDate.from("2024-06-15");
        const result = withCalendar(pd, "iso8601");
        expect(result.year).toBe(2024);
        expect(result.month).toBe(6);
        expect(result.day).toBe(15);
    });
});
