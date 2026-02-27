import type { AnyTemporalDateTime } from "../types.js";

export function startOfMinute(
    date: Temporal.ZonedDateTime,
): Temporal.ZonedDateTime;
export function startOfMinute(
    date: Temporal.PlainDateTime,
): Temporal.PlainDateTime;
export function startOfMinute(date: AnyTemporalDateTime): AnyTemporalDateTime {
    return date.with({
        second: 0,
        millisecond: 0,
        microsecond: 0,
        nanosecond: 0,
    });
}
