import type { AnyTemporalTime } from "../types.js";

export function subMinutes(date: Temporal.ZonedDateTime, amount: number): Temporal.ZonedDateTime;
export function subMinutes(date: Temporal.PlainDateTime, amount: number): Temporal.PlainDateTime;
export function subMinutes(date: Temporal.PlainTime, amount: number): Temporal.PlainTime;
export function subMinutes(date: AnyTemporalTime, amount: number): AnyTemporalTime {
  return date.subtract({ minutes: amount });
}
