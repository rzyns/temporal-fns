import type { AnyTemporalDate } from "../types.js";

/**
 * Is the given date a Monday?
 */
export function isMonday(date: AnyTemporalDate): boolean {
    return date.dayOfWeek === 1;
}
