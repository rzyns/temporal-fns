import type { AnyTemporalDateTime } from "../types.js";

/**
 * Sets the minutes of the given date/time, returning a new date/time with the minutes replaced.
 *
 * @param date - The date/time to set the minutes on
 * @param minutes - The minutes to set (0-59)
 * @returns A new date/time with the minutes set
 */
export function setMinutes(date: Temporal.ZonedDateTime, minutes: number): Temporal.ZonedDateTime;
export function setMinutes(date: Temporal.PlainDateTime, minutes: number): Temporal.PlainDateTime;
export function setMinutes(date: AnyTemporalDateTime, minutes: number): AnyTemporalDateTime {
  return date.with({ minute: minutes });
}
