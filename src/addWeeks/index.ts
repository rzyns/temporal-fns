import type { AnyTemporalDate } from "../types.js";

export function addWeeks(
  date: Temporal.ZonedDateTime,
  amount: number,
): Temporal.ZonedDateTime;
export function addWeeks(
  date: Temporal.PlainDateTime,
  amount: number,
): Temporal.PlainDateTime;
export function addWeeks(
  date: Temporal.PlainDate,
  amount: number,
): Temporal.PlainDate;
export function addWeeks(
  date: AnyTemporalDate,
  amount: number,
): AnyTemporalDate {
  return date.add({ weeks: amount });
}
