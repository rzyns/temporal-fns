import type { AnyTemporalDate } from "../types.js";

/**
 * Returns the month of the given date (1-indexed, 1 = January, 12 = December).
 *
 * @param date - The date to get the month from
 * @returns The month (1-12)
 */
export function getMonth(date: AnyTemporalDate): number {
    return date.month;
}
