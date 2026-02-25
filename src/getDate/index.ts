import type { AnyTemporalDate } from "../types.js";

/**
 * Returns the day of the month of the given date (1-31).
 *
 * @param date - The date to get the day of month from
 * @returns The day of the month (1-31)
 */
export function getDate(date: AnyTemporalDate): number {
  return date.day;
}
