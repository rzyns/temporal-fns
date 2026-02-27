import type { AnyTemporalDateTime } from "../types.js";

export function endOfHour(date: Temporal.ZonedDateTime): Temporal.ZonedDateTime;
export function endOfHour(date: Temporal.PlainDateTime): Temporal.PlainDateTime;
export function endOfHour(date: AnyTemporalDateTime): AnyTemporalDateTime {
    return date.with({
        minute: 59,
        second: 59,
        millisecond: 999,
        microsecond: 999,
        nanosecond: 999,
    });
}
