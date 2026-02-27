import type { AnyTemporalTime } from "../types.js";

export function subSeconds(
    date: Temporal.ZonedDateTime,
    amount: number,
): Temporal.ZonedDateTime;
export function subSeconds(
    date: Temporal.PlainDateTime,
    amount: number,
): Temporal.PlainDateTime;
export function subSeconds(
    date: Temporal.PlainTime,
    amount: number,
): Temporal.PlainTime;
export function subSeconds(
    date: AnyTemporalTime,
    amount: number,
): AnyTemporalTime {
    return date.subtract({ seconds: amount });
}
