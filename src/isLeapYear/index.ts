import type { AnyTemporalDate } from "../types.js";

/**
 * Is the given date in a leap year?
 */
export function isLeapYear(date: AnyTemporalDate): boolean {
  return date.inLeapYear;
}
