import type { AnyTemporalDate } from "../types.js";

export function addMonths(
    date: Temporal.ZonedDateTime,
    amount: number,
): Temporal.ZonedDateTime;
export function addMonths(
    date: Temporal.PlainDateTime,
    amount: number,
): Temporal.PlainDateTime;
export function addMonths(
    date: Temporal.PlainDate,
    amount: number,
): Temporal.PlainDate;
export function addMonths(
    date: AnyTemporalDate,
    amount: number,
): AnyTemporalDate {
    return date.add({ months: amount });
}
