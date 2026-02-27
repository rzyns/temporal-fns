import type { AnyTemporalDateTime } from "../types.js";

/**
 * Sets the hours of the given date/time, returning a new date/time with the hours replaced.
 *
 * @param date - The date/time to set the hours on
 * @param hours - The hours to set (0-23)
 * @returns A new date/time with the hours set
 */
export function setHours(
    date: Temporal.ZonedDateTime,
    hours: number,
): Temporal.ZonedDateTime;
export function setHours(
    date: Temporal.PlainDateTime,
    hours: number,
): Temporal.PlainDateTime;
export function setHours(
    date: AnyTemporalDateTime,
    hours: number,
): AnyTemporalDateTime {
    return date.with({ hour: hours });
}
