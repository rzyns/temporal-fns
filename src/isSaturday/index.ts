import type { AnyTemporalDate } from "../types.js";

/**
 * Is the given date a Saturday?
 */
export function isSaturday(date: AnyTemporalDate): boolean {
    return date.dayOfWeek === 6;
}
