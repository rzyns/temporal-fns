import type { AnyTemporalDate } from "../types.js";

/**
 * Sets the quarter of the given date by adjusting the month accordingly.
 * The day within the month and time components are preserved.
 *
 * @param date - The date to modify
 * @param quarter - The target quarter (1-4)
 * @returns A new date set to the corresponding quarter
 */
export function setQuarter(
    date: Temporal.ZonedDateTime,
    quarter: 1 | 2 | 3 | 4,
): Temporal.ZonedDateTime;
export function setQuarter(
    date: Temporal.PlainDateTime,
    quarter: 1 | 2 | 3 | 4,
): Temporal.PlainDateTime;
export function setQuarter(
    date: Temporal.PlainDate,
    quarter: 1 | 2 | 3 | 4,
): Temporal.PlainDate;
export function setQuarter(
    date: AnyTemporalDate,
    quarter: 1 | 2 | 3 | 4,
): AnyTemporalDate {
    const currentQuarter = Math.ceil(date.month / 3);
    const monthDiff = (quarter - currentQuarter) * 3;
    return date.add({ months: monthDiff });
}
