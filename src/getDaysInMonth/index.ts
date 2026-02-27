import type { AnyTemporalDate } from "../types.js";

/**
 * Returns the number of days in the month of the given date.
 *
 * @param date - The date to get the number of days in the month from
 * @returns The number of days in the month (28-31)
 */
export function getDaysInMonth(date: AnyTemporalDate): number {
    return date.daysInMonth;
}
