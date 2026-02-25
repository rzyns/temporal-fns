import type { AnyTemporalDate } from "../types.js";

export function subMonths(date: Temporal.ZonedDateTime, amount: number): Temporal.ZonedDateTime;
export function subMonths(date: Temporal.PlainDateTime, amount: number): Temporal.PlainDateTime;
export function subMonths(date: Temporal.PlainDate, amount: number): Temporal.PlainDate;
export function subMonths(date: AnyTemporalDate, amount: number): AnyTemporalDate {
  return date.subtract({ months: amount });
}
