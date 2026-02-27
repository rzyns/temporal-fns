import type { AnyTemporalDate } from "../types.js";

export function subYears(
    date: Temporal.ZonedDateTime,
    amount: number,
): Temporal.ZonedDateTime;
export function subYears(
    date: Temporal.PlainDateTime,
    amount: number,
): Temporal.PlainDateTime;
export function subYears(
    date: Temporal.PlainDate,
    amount: number,
): Temporal.PlainDate;
export function subYears(
    date: AnyTemporalDate,
    amount: number,
): AnyTemporalDate {
    return date.subtract({ years: amount });
}
