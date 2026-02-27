import type { AnyTemporalDate } from "../types.js";

/**
 * Is the given date a Tuesday?
 */
export function isTuesday(date: AnyTemporalDate): boolean {
    return date.dayOfWeek === 2;
}
