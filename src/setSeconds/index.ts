import type { AnyTemporalDateTime } from "../types.js";

/**
 * Sets the seconds of the given date/time, returning a new date/time with the seconds replaced.
 *
 * @param date - The date/time to set the seconds on
 * @param seconds - The seconds to set (0-59)
 * @returns A new date/time with the seconds set
 */
export function setSeconds(date: Temporal.ZonedDateTime, seconds: number): Temporal.ZonedDateTime;
export function setSeconds(date: Temporal.PlainDateTime, seconds: number): Temporal.PlainDateTime;
export function setSeconds(date: AnyTemporalDateTime, seconds: number): AnyTemporalDateTime {
  return date.with({ second: seconds });
}
