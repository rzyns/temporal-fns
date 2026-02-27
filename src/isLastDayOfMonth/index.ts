import type { AnyTemporalDate } from "../types.js";

/**
 * Is the given date the last day of a month?
 */
export function isLastDayOfMonth(date: AnyTemporalDate): boolean {
    return date.day === date.daysInMonth;
}
