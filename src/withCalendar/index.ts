import type { AnyTemporalDate } from "../types.js";

export function withCalendar(
    date: Temporal.ZonedDateTime,
    calendar: string,
): Temporal.ZonedDateTime;
export function withCalendar(
    date: Temporal.PlainDateTime,
    calendar: string,
): Temporal.PlainDateTime;
export function withCalendar(
    date: Temporal.PlainDate,
    calendar: string,
): Temporal.PlainDate;
export function withCalendar(
    date: AnyTemporalDate,
    calendar: string,
): AnyTemporalDate {
    return date.withCalendar(calendar);
}
