import type { AnyTemporalTime } from "../types.js";

export function subHours(date: Temporal.ZonedDateTime, amount: number): Temporal.ZonedDateTime;
export function subHours(date: Temporal.PlainDateTime, amount: number): Temporal.PlainDateTime;
export function subHours(date: Temporal.PlainTime, amount: number): Temporal.PlainTime;
export function subHours(date: AnyTemporalTime, amount: number): AnyTemporalTime {
  return date.subtract({ hours: amount });
}
