import type { AnyTemporalDate } from "../types.js";

/**
 * Is the given date the first day of a month?
 */
export function isFirstDayOfMonth(date: AnyTemporalDate): boolean {
    return date.day === 1;
}
