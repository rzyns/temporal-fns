import type { AnyTemporalTime } from "../types.js";

/**
 * Returns the minute of the given date/time (0-59).
 *
 * @param date - The date/time to get the minute from
 * @returns The minute (0-59)
 */
export function getMinutes(date: AnyTemporalTime): number {
  return date.minute;
}
