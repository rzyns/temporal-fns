import type { AnyTemporalDate } from "../types.js";

/**
 * Returns the ISO string representation of the given Temporal value.
 *
 * @param date - The Temporal value to format
 * @returns The ISO 8601 string representation
 */
export function formatISO(
    date: AnyTemporalDate | Temporal.Instant | Temporal.PlainTime,
): string {
    return date.toString();
}
