import type { AnyTemporalTime } from "../types.js";

/**
 * Returns the millisecond of the given date/time (0-999).
 *
 * @param date - The date/time to get the millisecond from
 * @returns The millisecond (0-999)
 */
export function getMilliseconds(date: AnyTemporalTime): number {
  return date.millisecond;
}
