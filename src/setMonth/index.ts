import type { AnyTemporalDate } from "../types.js";

/**
 * Sets the month of the given date, returning a new date with the month replaced.
 *
 * @param date - The date to set the month on
 * @param month - The month to set (1-12)
 * @returns A new date with the month set
 */
export function setMonth(date: Temporal.ZonedDateTime, month: number): Temporal.ZonedDateTime;
export function setMonth(date: Temporal.PlainDateTime, month: number): Temporal.PlainDateTime;
export function setMonth(date: Temporal.PlainDate, month: number): Temporal.PlainDate;
export function setMonth(date: AnyTemporalDate, month: number): AnyTemporalDate {
  return date.with({ month });
}
