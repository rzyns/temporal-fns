import type { AnyTemporalDate } from "../types.js";

export function subWeeks(date: Temporal.ZonedDateTime, amount: number): Temporal.ZonedDateTime;
export function subWeeks(date: Temporal.PlainDateTime, amount: number): Temporal.PlainDateTime;
export function subWeeks(date: Temporal.PlainDate, amount: number): Temporal.PlainDate;
export function subWeeks(date: AnyTemporalDate, amount: number): AnyTemporalDate {
  return date.subtract({ weeks: amount });
}
