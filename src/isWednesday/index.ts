import type { AnyTemporalDate } from "../types.js";

/**
 * Is the given date a Wednesday?
 */
export function isWednesday(date: AnyTemporalDate): boolean {
    return date.dayOfWeek === 3;
}
