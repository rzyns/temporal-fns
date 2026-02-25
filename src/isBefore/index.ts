import { compareAsc } from "../compareAsc/index.js";
import type { AnyTemporalDate } from "../types.js";

/**
 * Is the first date before the second one?
 */
export function isBefore(
  date: AnyTemporalDate,
  dateToCompare: AnyTemporalDate,
): boolean {
  return compareAsc(date, dateToCompare) === -1;
}
