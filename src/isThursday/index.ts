import type { AnyTemporalDate } from "../types.js";

/**
 * Is the given date a Thursday?
 */
export function isThursday(date: AnyTemporalDate): boolean {
  return date.dayOfWeek === 4;
}
