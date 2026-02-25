import type { AnyTemporalDate } from "../types.js";

export function addDays(date: Temporal.ZonedDateTime, amount: number): Temporal.ZonedDateTime;
export function addDays(date: Temporal.PlainDateTime, amount: number): Temporal.PlainDateTime;
export function addDays(date: Temporal.PlainDate, amount: number): Temporal.PlainDate;
export function addDays(date: AnyTemporalDate, amount: number): AnyTemporalDate {
  return date.add({ days: amount });
}
