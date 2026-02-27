import type { AnyTemporalTime } from "../types.js";

/**
 * Returns the second of the given date/time (0-59).
 *
 * @param date - The date/time to get the second from
 * @returns The second (0-59)
 */
export function getSeconds(date: AnyTemporalTime): number {
    return date.second;
}
