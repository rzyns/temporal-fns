import { type TemporalOf, withDate } from "../_lib/temporalOf.js";
import type { AnyTemporalDate } from "../types.js";

/**
 * Sets the year of the given date, returning a new date with the year replaced.
 *
 * @param date - The date to set the year on
 * @param year - The year to set
 * @returns A new date with the year set
 */
export function setYear<T extends AnyTemporalDate>(
    date: T,
    year: number,
): TemporalOf<T> {
    return withDate(date, (d) => d.with({ year }));
}
