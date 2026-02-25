import type { AnyTemporalDate } from "../types.js";

export function startOfMonth(date: Temporal.ZonedDateTime): Temporal.ZonedDateTime;
export function startOfMonth(date: Temporal.PlainDateTime): Temporal.PlainDateTime;
export function startOfMonth(date: Temporal.PlainDate): Temporal.PlainDate;
export function startOfMonth(date: AnyTemporalDate): AnyTemporalDate {
  if (date instanceof Temporal.PlainDate) return date.with({ day: 1 });
  return date.with({ day: 1, hour: 0, minute: 0, second: 0, millisecond: 0, microsecond: 0, nanosecond: 0 });
}
