import type { AnyTemporalDate } from "../types.js";

export function add(date: Temporal.ZonedDateTime, duration: Temporal.Duration | Temporal.DurationLike): Temporal.ZonedDateTime;
export function add(date: Temporal.PlainDateTime, duration: Temporal.Duration | Temporal.DurationLike): Temporal.PlainDateTime;
export function add(date: Temporal.PlainDate, duration: Temporal.Duration | Temporal.DurationLike): Temporal.PlainDate;
export function add(date: AnyTemporalDate, duration: Temporal.Duration | Temporal.DurationLike): AnyTemporalDate {
  return date.add(duration);
}
