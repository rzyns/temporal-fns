import type { AnyTemporalDate } from "../types.js";

/**
 * Returns the day of the year of the given date (1-366).
 *
 * @param date - The date to get the day of year from
 * @returns The day of the year (1-366)
 */
export function getDayOfYear(date: AnyTemporalDate): number {
    return date.dayOfYear;
}
