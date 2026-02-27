import type { AnyTemporalTime } from "../types.js";

export function addHours(
    date: Temporal.ZonedDateTime,
    amount: number,
): Temporal.ZonedDateTime;
export function addHours(
    date: Temporal.PlainDateTime,
    amount: number,
): Temporal.PlainDateTime;
export function addHours(
    date: Temporal.PlainTime,
    amount: number,
): Temporal.PlainTime;
export function addHours(
    date: AnyTemporalTime,
    amount: number,
): AnyTemporalTime {
    return date.add({ hours: amount });
}
