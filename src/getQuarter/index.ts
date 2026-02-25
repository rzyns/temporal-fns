import type { AnyTemporalDate } from "../types.js";

/**
 * Returns the quarter of the given date (1-4).
 *
 * - Q1: January-March (months 1-3)
 * - Q2: April-June (months 4-6)
 * - Q3: July-September (months 7-9)
 * - Q4: October-December (months 10-12)
 *
 * @param date - The date to get the quarter from
 * @returns The quarter (1-4)
 */
export function getQuarter(date: AnyTemporalDate): 1 | 2 | 3 | 4 {
  return Math.ceil(date.month / 3) as 1 | 2 | 3 | 4;
}
