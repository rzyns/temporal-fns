import type { AnyTemporalDate } from "../types.js";

/**
 * Is the given date a Sunday?
 */
export function isSunday(date: AnyTemporalDate): boolean {
    return date.dayOfWeek === 7;
}
