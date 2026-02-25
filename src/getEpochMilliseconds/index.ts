import type { AnyTemporalInstant } from "../types.js";

/**
 * Returns the number of milliseconds since the Unix epoch (1970-01-01T00:00:00Z)
 * for the given instant.
 *
 * @param date - The instant to get the epoch milliseconds from
 * @returns The number of milliseconds since the Unix epoch
 */
export function getEpochMilliseconds(date: AnyTemporalInstant): number {
  return date.epochMilliseconds;
}
