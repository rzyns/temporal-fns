import { type TemporalOf, withDate } from "../_lib/temporalOf.js";
import type { AnyTemporalDate } from "../types.js";

/**
 * Sets the quarter of the given date by adjusting the month accordingly.
 * The day within the month and time components are preserved.
 *
 * @param date - The date to modify
 * @param quarter - The target quarter (1-4)
 * @returns A new date set to the corresponding quarter
 */
export function setQuarter<T extends AnyTemporalDate>(
    date: T,
    quarter: 1 | 2 | 3 | 4,
): TemporalOf<T> {
    return withDate(date, (d) => {
        const currentQuarter = Math.ceil(d.month / 3);
        const monthDiff = (quarter - currentQuarter) * 3;
        return d.add({ months: monthDiff });
    });
}
