import type { AnyTemporalDate } from "../types.js";

/**
 * Returns the ISO 8601 week number of the given date.
 *
 * Note: This function assumes the ISO 8601 calendar. The `weekOfYear` property
 * may be `undefined` for non-ISO calendars. This function asserts it as `number`
 * since it is always defined for the ISO calendar.
 *
 * @param date - The date to get the week of year from
 * @returns The ISO week number (1-53)
 */
export function getWeekOfYear(date: AnyTemporalDate): number {
    return date.weekOfYear as number;
}
