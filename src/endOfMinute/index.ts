import type { AnyTemporalDateTime } from "../types.js";

export function endOfMinute(
  date: Temporal.ZonedDateTime,
): Temporal.ZonedDateTime;
export function endOfMinute(
  date: Temporal.PlainDateTime,
): Temporal.PlainDateTime;
export function endOfMinute(date: AnyTemporalDateTime): AnyTemporalDateTime {
  return date.with({
    second: 59,
    millisecond: 999,
    microsecond: 999,
    nanosecond: 999,
  });
}
