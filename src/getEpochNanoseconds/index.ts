import type { AnyTemporalInstant } from "../types.js";

/**
 * Returns the number of nanoseconds since the Unix epoch (1970-01-01T00:00:00Z)
 * for the given instant as a BigInt.
 *
 * @param date - The instant to get the epoch nanoseconds from
 * @returns The number of nanoseconds since the Unix epoch as a BigInt
 */
export function getEpochNanoseconds(date: AnyTemporalInstant): bigint {
    return date.epochNanoseconds;
}
