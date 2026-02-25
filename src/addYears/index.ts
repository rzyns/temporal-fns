import type { AnyTemporalDate } from "../types.js";

export function addYears(date: Temporal.ZonedDateTime, amount: number): Temporal.ZonedDateTime;
export function addYears(date: Temporal.PlainDateTime, amount: number): Temporal.PlainDateTime;
export function addYears(date: Temporal.PlainDate, amount: number): Temporal.PlainDate;
export function addYears(date: AnyTemporalDate, amount: number): AnyTemporalDate {
  return date.add({ years: amount });
}
