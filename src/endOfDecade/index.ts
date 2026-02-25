import type { AnyTemporalDate } from "../types.js";

export function endOfDecade(date: Temporal.ZonedDateTime): Temporal.ZonedDateTime;
export function endOfDecade(date: Temporal.PlainDateTime): Temporal.PlainDateTime;
export function endOfDecade(date: Temporal.PlainDate): Temporal.PlainDate;
export function endOfDecade(date: AnyTemporalDate): AnyTemporalDate {
  const year = Math.floor(date.year / 10) * 10 + 9;
  if (date instanceof Temporal.PlainDate) return date.with({ year, month: 12, day: 31 });
  return date.with({ year, month: 12, day: 31, hour: 23, minute: 59, second: 59, millisecond: 999, microsecond: 999, nanosecond: 999 });
}
