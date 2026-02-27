import type { AnyTemporalDateTime } from "../types.js";

/**
 * Sets the milliseconds of the given date/time, returning a new date/time with the milliseconds replaced.
 *
 * @param date - The date/time to set the milliseconds on
 * @param milliseconds - The milliseconds to set (0-999)
 * @returns A new date/time with the milliseconds set
 */
export function setMilliseconds(
    date: Temporal.ZonedDateTime,
    milliseconds: number,
): Temporal.ZonedDateTime;
export function setMilliseconds(
    date: Temporal.PlainDateTime,
    milliseconds: number,
): Temporal.PlainDateTime;
export function setMilliseconds(
    date: AnyTemporalDateTime,
    milliseconds: number,
): AnyTemporalDateTime {
    return date.with({ millisecond: milliseconds });
}
