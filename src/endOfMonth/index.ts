import type { AnyTemporalDate } from "../types.js";

export function endOfMonth(
  date: Temporal.ZonedDateTime,
): Temporal.ZonedDateTime;
export function endOfMonth(
  date: Temporal.PlainDateTime,
): Temporal.PlainDateTime;
export function endOfMonth(date: Temporal.PlainDate): Temporal.PlainDate;
export function endOfMonth(date: AnyTemporalDate): AnyTemporalDate {
  if (date instanceof Temporal.PlainDate)
    return date.with({ day: date.daysInMonth });
  return date.with({
    day: date.daysInMonth,
    hour: 23,
    minute: 59,
    second: 59,
    millisecond: 999,
    microsecond: 999,
    nanosecond: 999,
  });
}
