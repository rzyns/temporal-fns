import type { AnyTemporalDate } from "../types.js";

export function startOfYear(date: Temporal.ZonedDateTime): Temporal.ZonedDateTime;
export function startOfYear(date: Temporal.PlainDateTime): Temporal.PlainDateTime;
export function startOfYear(date: Temporal.PlainDate): Temporal.PlainDate;
export function startOfYear(date: AnyTemporalDate): AnyTemporalDate {
  if (date instanceof Temporal.PlainDate) return date.with({ month: 1, day: 1 });
  return date.with({ month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0, microsecond: 0, nanosecond: 0 });
}
