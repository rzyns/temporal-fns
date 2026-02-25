import type { AnyTemporalDate } from "../types.js";

export function subDays(date: Temporal.ZonedDateTime, amount: number): Temporal.ZonedDateTime;
export function subDays(date: Temporal.PlainDateTime, amount: number): Temporal.PlainDateTime;
export function subDays(date: Temporal.PlainDate, amount: number): Temporal.PlainDate;
export function subDays(date: AnyTemporalDate, amount: number): AnyTemporalDate {
  return date.subtract({ days: amount });
}
