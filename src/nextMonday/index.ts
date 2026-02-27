import { nextDay } from "../nextDay/index.js";
import type { AnyTemporalDate } from "../types.js";

export function nextMonday(
    date: Temporal.ZonedDateTime,
): Temporal.ZonedDateTime;
export function nextMonday(
    date: Temporal.PlainDateTime,
): Temporal.PlainDateTime;
export function nextMonday(date: Temporal.PlainDate): Temporal.PlainDate;
export function nextMonday(date: AnyTemporalDate): AnyTemporalDate {
    return nextDay(date as Temporal.PlainDate, 1);
}
