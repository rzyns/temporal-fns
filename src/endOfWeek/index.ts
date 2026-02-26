import type { AnyTemporalDate, WeekOptions } from "../types.js";

export function endOfWeek(
  date: Temporal.ZonedDateTime,
  options?: WeekOptions,
): Temporal.ZonedDateTime;
export function endOfWeek(
  date: Temporal.PlainDateTime,
  options?: WeekOptions,
): Temporal.PlainDateTime;
export function endOfWeek(
  date: Temporal.PlainDate,
  options?: WeekOptions,
): Temporal.PlainDate;
export function endOfWeek(
  date: AnyTemporalDate,
  options?: WeekOptions,
): AnyTemporalDate {
  const dayOfWeek = date.dayOfWeek;
  const weekStartsOn = options?.weekStartsOn ?? 1;
  const diff = (dayOfWeek - weekStartsOn + 7) % 7;
  const endDaysToAdd = 6 - diff;
  const result = date.add({ days: endDaysToAdd });
  if (result instanceof Temporal.PlainDate) return result;
  return result.with({
    hour: 23,
    minute: 59,
    second: 59,
    millisecond: 999,
    microsecond: 999,
    nanosecond: 999,
  });
}
