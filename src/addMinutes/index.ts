import type { AnyTemporalTime } from "../types.js";

export function addMinutes(
    date: Temporal.ZonedDateTime,
    amount: number,
): Temporal.ZonedDateTime;
export function addMinutes(
    date: Temporal.PlainDateTime,
    amount: number,
): Temporal.PlainDateTime;
export function addMinutes(
    date: Temporal.PlainTime,
    amount: number,
): Temporal.PlainTime;
export function addMinutes(
    date: AnyTemporalTime,
    amount: number,
): AnyTemporalTime {
    return date.add({ minutes: amount });
}
