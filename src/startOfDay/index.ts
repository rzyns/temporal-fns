import type { AnyTemporalDate } from "../types.js";

export function startOfDay(
  date: Temporal.ZonedDateTime,
): Temporal.ZonedDateTime;
export function startOfDay(
  date: Temporal.PlainDateTime,
): Temporal.PlainDateTime;
export function startOfDay(date: Temporal.PlainDate): Temporal.PlainDate;
export function startOfDay(date: AnyTemporalDate): AnyTemporalDate {
  if (date instanceof Temporal.PlainDate) return date;
  return date.with({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
    microsecond: 0,
    nanosecond: 0,
  });
}
