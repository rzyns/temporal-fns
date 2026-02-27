import type { AnyTemporalDate } from "../types.js";

/**
 * Is the given date a weekend (Saturday or Sunday)?
 */
export function isWeekend(date: AnyTemporalDate): boolean {
    return date.dayOfWeek >= 6;
}
