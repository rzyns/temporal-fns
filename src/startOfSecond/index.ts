import type { AnyTemporalDateTime } from "../types.js";

export function startOfSecond(
    date: Temporal.ZonedDateTime,
): Temporal.ZonedDateTime;
export function startOfSecond(
    date: Temporal.PlainDateTime,
): Temporal.PlainDateTime;
export function startOfSecond(date: AnyTemporalDateTime): AnyTemporalDateTime {
    return date.with({ millisecond: 0, microsecond: 0, nanosecond: 0 });
}
