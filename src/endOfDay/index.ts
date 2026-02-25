import type { AnyTemporalDate } from "../types.js";

export function endOfDay(date: Temporal.ZonedDateTime): Temporal.ZonedDateTime;
export function endOfDay(date: Temporal.PlainDateTime): Temporal.PlainDateTime;
export function endOfDay(date: Temporal.PlainDate): Temporal.PlainDate;
export function endOfDay(date: AnyTemporalDate): AnyTemporalDate {
  if (date instanceof Temporal.PlainDate) return date;
  return date.with({ hour: 23, minute: 59, second: 59, millisecond: 999, microsecond: 999, nanosecond: 999 });
}
