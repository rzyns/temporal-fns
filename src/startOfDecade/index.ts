import type { AnyTemporalDate } from "../types.js";

export function startOfDecade(
  date: Temporal.ZonedDateTime,
): Temporal.ZonedDateTime;
export function startOfDecade(
  date: Temporal.PlainDateTime,
): Temporal.PlainDateTime;
export function startOfDecade(date: Temporal.PlainDate): Temporal.PlainDate;
export function startOfDecade(date: AnyTemporalDate): AnyTemporalDate {
  const year = Math.floor(date.year / 10) * 10;
  if (date instanceof Temporal.PlainDate)
    return date.with({ year, month: 1, day: 1 });
  return date.with({
    year,
    month: 1,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
    microsecond: 0,
    nanosecond: 0,
  });
}
