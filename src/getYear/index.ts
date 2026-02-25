import type { AnyTemporalDate } from "../types.js";

/**
 * Returns the year of the given date.
 *
 * @param date - The date to get the year from
 * @returns The year
 */
export function getYear(date: AnyTemporalDate): number {
  return date.year;
}
