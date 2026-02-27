import { type TemporalOf, withDate } from "../_lib/temporalOf.js";
import type { AnyTemporalDate } from "../types.js";

/**
 * Sets the day of the month of the given date, returning a new date with the day replaced.
 *
 * @param date - The date to set the day on
 * @param dayOfMonth - The day of the month to set
 * @returns A new date with the day of month set
 */
export function setDate<T extends AnyTemporalDate>(
    date: T,
    dayOfMonth: number,
): TemporalOf<T> {
    return withDate(date, (d) => d.with({ day: dayOfMonth }));
}
