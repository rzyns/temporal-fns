import type { AnyTemporalTime } from "../types.js";

export function addSeconds(
    date: Temporal.ZonedDateTime,
    amount: number,
): Temporal.ZonedDateTime;
export function addSeconds(
    date: Temporal.PlainDateTime,
    amount: number,
): Temporal.PlainDateTime;
export function addSeconds(
    date: Temporal.PlainTime,
    amount: number,
): Temporal.PlainTime;
export function addSeconds(
    date: AnyTemporalTime,
    amount: number,
): AnyTemporalTime {
    return date.add({ seconds: amount });
}
