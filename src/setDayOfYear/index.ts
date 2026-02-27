import { type TemporalOf, withDate } from "../_lib/temporalOf.js";
import type { AnyTemporalDate } from "../types.js";

/**
 * Sets the day of the year of the given date.
 * Sets to January 1 of the same year, then adds (dayOfYear - 1) days.
 *
 * @param date - The date to modify
 * @param dayOfYear - The day of the year to set (1-366)
 * @returns A new date set to the given day of the year
 */
export function setDayOfYear<T extends AnyTemporalDate>(
    date: T,
    dayOfYear: number,
): TemporalOf<T> {
    return withDate(date, (d) => {
        const startOfYear = d.with({ month: 1, day: 1 });
        return startOfYear.add({ days: dayOfYear - 1 });
    });
}
