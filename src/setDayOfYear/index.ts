import type { AnyTemporalDate } from "../types.js";

/**
 * Sets the day of the year of the given date.
 * Sets to January 1 of the same year, then adds (dayOfYear - 1) days.
 *
 * @param date - The date to modify
 * @param dayOfYear - The day of the year to set (1-366)
 * @returns A new date set to the given day of the year
 */
export function setDayOfYear(date: Temporal.ZonedDateTime, dayOfYear: number): Temporal.ZonedDateTime;
export function setDayOfYear(date: Temporal.PlainDateTime, dayOfYear: number): Temporal.PlainDateTime;
export function setDayOfYear(date: Temporal.PlainDate, dayOfYear: number): Temporal.PlainDate;
export function setDayOfYear(date: AnyTemporalDate, dayOfYear: number): AnyTemporalDate {
  const startOfYear = date.with({ month: 1, day: 1 });
  return startOfYear.add({ days: dayOfYear - 1 });
}
