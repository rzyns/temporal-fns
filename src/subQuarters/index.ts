import type { AnyTemporalDate } from "../types.js";

export function subQuarters(
    date: Temporal.ZonedDateTime,
    amount: number,
): Temporal.ZonedDateTime;
export function subQuarters(
    date: Temporal.PlainDateTime,
    amount: number,
): Temporal.PlainDateTime;
export function subQuarters(
    date: Temporal.PlainDate,
    amount: number,
): Temporal.PlainDate;
export function subQuarters(
    date: AnyTemporalDate,
    amount: number,
): AnyTemporalDate {
    return date.subtract({ months: amount * 3 });
}
