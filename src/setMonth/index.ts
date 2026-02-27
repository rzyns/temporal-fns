import { type TemporalOf, withDate } from "../_lib/temporalOf.js";
import type { AnyTemporalDate } from "../types.js";

/**
 * Sets the month of the given date, returning a new date with the month replaced.
 *
 * @param date - The date to set the month on
 * @param month - The month to set (1-12)
 * @returns A new date with the month set
 */
export function setMonth<T extends AnyTemporalDate>(
    date: T,
    month: number,
): TemporalOf<T> {
    return withDate(date, (d) => d.with({ month }));
}
