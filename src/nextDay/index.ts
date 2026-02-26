import type { AnyTemporalDate, DayOfWeek } from "../types.js";

export function nextDay(
  date: Temporal.ZonedDateTime,
  day: DayOfWeek,
): Temporal.ZonedDateTime;
export function nextDay(
  date: Temporal.PlainDateTime,
  day: DayOfWeek,
): Temporal.PlainDateTime;
export function nextDay(
  date: Temporal.PlainDate,
  day: DayOfWeek,
): Temporal.PlainDate;
export function nextDay(
  date: AnyTemporalDate,
  day: DayOfWeek,
): AnyTemporalDate {
  let result = date.add({ days: 1 });
  while (result.dayOfWeek !== day) {
    result = result.add({ days: 1 });
  }
  return result;
}
