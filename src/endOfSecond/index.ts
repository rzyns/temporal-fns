import type { AnyTemporalDateTime } from "../types.js";

export function endOfSecond(
  date: Temporal.ZonedDateTime,
): Temporal.ZonedDateTime;
export function endOfSecond(
  date: Temporal.PlainDateTime,
): Temporal.PlainDateTime;
export function endOfSecond(date: AnyTemporalDateTime): AnyTemporalDateTime {
  return date.with({ millisecond: 999, microsecond: 999, nanosecond: 999 });
}
