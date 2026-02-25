import type { AnyTemporalDate, DayOfWeek } from "../types.js";

/**
 * Returns the day of the week of the given date (ISO 8601: 1 = Monday, 7 = Sunday).
 *
 * @param date - The date to get the day of week from
 * @returns The day of the week (1-7)
 */
export function getDay(date: AnyTemporalDate): DayOfWeek {
  return date.dayOfWeek as DayOfWeek;
}
