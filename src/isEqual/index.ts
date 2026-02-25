import { compareAsc } from "../compareAsc/index.js";
import type { AnyTemporalDate } from "../types.js";

/**
 * Are the two dates equal?
 *
 * Compares wall-clock date parts (and time parts if both have them).
 */
export function isEqual(
  date: AnyTemporalDate,
  dateToCompare: AnyTemporalDate,
): boolean {
  return compareAsc(date, dateToCompare) === 0;
}
