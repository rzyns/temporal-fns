import { compareAsc } from "../compareAsc/index.js";
import type { AnyTemporalDate } from "../types.js";

/**
 * Compare two dates in descending order.
 * Returns -1 if left > right, 0 if equal, or 1 if left < right.
 */
export function compareDesc(
  dateLeft: AnyTemporalDate,
  dateRight: AnyTemporalDate,
): -1 | 0 | 1 {
  return compareAsc(dateRight, dateLeft);
}
