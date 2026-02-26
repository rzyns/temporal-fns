import type { AnyTemporalDateTime } from "../types.js";

export function startOfHour(
  date: Temporal.ZonedDateTime,
): Temporal.ZonedDateTime;
export function startOfHour(
  date: Temporal.PlainDateTime,
): Temporal.PlainDateTime;
export function startOfHour(date: AnyTemporalDateTime): AnyTemporalDateTime {
  return date.with({
    minute: 0,
    second: 0,
    millisecond: 0,
    microsecond: 0,
    nanosecond: 0,
  });
}
