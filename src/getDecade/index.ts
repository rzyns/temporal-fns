import type { AnyTemporalDate } from "../types.js";

/**
 * Returns the decade of the given date. The decade is the year rounded down
 * to the nearest multiple of 10.
 *
 * @param date - The date to get the decade from
 * @returns The decade (e.g., 2020 for years 2020-2029)
 */
export function getDecade(date: AnyTemporalDate): number {
  return Math.floor(date.year / 10) * 10;
}
