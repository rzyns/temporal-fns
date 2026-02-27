import type { AnyTemporalDate } from "../types.js";

/**
 * Returns the number of days in the year of the given date.
 *
 * @param date - The date to get the number of days in the year from
 * @returns The number of days in the year (365 or 366)
 */
export function getDaysInYear(date: AnyTemporalDate): number {
    return date.daysInYear;
}
