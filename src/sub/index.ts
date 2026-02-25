import type { AnyTemporalDate } from "../types.js";

export function sub(date: Temporal.ZonedDateTime, duration: Temporal.Duration | Temporal.DurationLike): Temporal.ZonedDateTime;
export function sub(date: Temporal.PlainDateTime, duration: Temporal.Duration | Temporal.DurationLike): Temporal.PlainDateTime;
export function sub(date: Temporal.PlainDate, duration: Temporal.Duration | Temporal.DurationLike): Temporal.PlainDate;
export function sub(date: AnyTemporalDate, duration: Temporal.Duration | Temporal.DurationLike): AnyTemporalDate {
  return date.subtract(duration);
}
