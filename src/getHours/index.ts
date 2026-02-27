import type { AnyTemporalTime } from "../types.js";

/**
 * Returns the hour of the given date/time (0-23).
 *
 * @param date - The date/time to get the hour from
 * @returns The hour (0-23)
 */
export function getHours(date: AnyTemporalTime): number {
    return date.hour;
}
