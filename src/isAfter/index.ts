import { compareAsc } from "../compareAsc/index.js";
import type { AnyTemporalDate } from "../types.js";

/**
 * Is the first date after the second one?
 */
export function isAfter(
  date: AnyTemporalDate,
  dateToCompare: AnyTemporalDate,
): boolean {
  return compareAsc(date, dateToCompare) === 1;
}
