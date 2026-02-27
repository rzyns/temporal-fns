import type { AnyTemporalDate } from "../types.js";

/**
 * Sets the day of the month of the given date, returning a new date with the day replaced.
 *
 * @param date - The date to set the day on
 * @param dayOfMonth - The day of the month to set
 * @returns A new date with the day of month set
 */
export function setDate(
    date: Temporal.ZonedDateTime,
    dayOfMonth: number,
): Temporal.ZonedDateTime;
export function setDate(
    date: Temporal.PlainDateTime,
    dayOfMonth: number,
): Temporal.PlainDateTime;
export function setDate(
    date: Temporal.PlainDate,
    dayOfMonth: number,
): Temporal.PlainDate;
export function setDate(
    date: AnyTemporalDate,
    dayOfMonth: number,
): AnyTemporalDate {
    return date.with({ day: dayOfMonth });
}
