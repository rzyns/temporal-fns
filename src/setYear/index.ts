import type { AnyTemporalDate } from "../types.js";

/**
 * Sets the year of the given date, returning a new date with the year replaced.
 *
 * @param date - The date to set the year on
 * @param year - The year to set
 * @returns A new date with the year set
 */
export function setYear(date: Temporal.ZonedDateTime, year: number): Temporal.ZonedDateTime;
export function setYear(date: Temporal.PlainDateTime, year: number): Temporal.PlainDateTime;
export function setYear(date: Temporal.PlainDate, year: number): Temporal.PlainDate;
export function setYear(date: AnyTemporalDate, year: number): AnyTemporalDate {
  return date.with({ year });
}
