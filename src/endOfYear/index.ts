import type { AnyTemporalDate } from "../types.js";

export function endOfYear(date: Temporal.ZonedDateTime): Temporal.ZonedDateTime;
export function endOfYear(date: Temporal.PlainDateTime): Temporal.PlainDateTime;
export function endOfYear(date: Temporal.PlainDate): Temporal.PlainDate;
export function endOfYear(date: AnyTemporalDate): AnyTemporalDate {
    if (date instanceof Temporal.PlainDate)
        return date.with({ month: 12, day: 31 });
    return date.with({
        month: 12,
        day: 31,
        hour: 23,
        minute: 59,
        second: 59,
        millisecond: 999,
        microsecond: 999,
        nanosecond: 999,
    });
}
