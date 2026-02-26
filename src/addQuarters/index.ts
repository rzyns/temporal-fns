import type { AnyTemporalDate } from "../types.js";

export function addQuarters(
  date: Temporal.ZonedDateTime,
  amount: number,
): Temporal.ZonedDateTime;
export function addQuarters(
  date: Temporal.PlainDateTime,
  amount: number,
): Temporal.PlainDateTime;
export function addQuarters(
  date: Temporal.PlainDate,
  amount: number,
): Temporal.PlainDate;
export function addQuarters(
  date: AnyTemporalDate,
  amount: number,
): AnyTemporalDate {
  return date.add({ months: amount * 3 });
}
