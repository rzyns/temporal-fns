import type { AnyTemporalDate } from "../types.js";

/**
 * Is the given date a Friday?
 */
export function isFriday(date: AnyTemporalDate): boolean {
    return date.dayOfWeek === 5;
}
