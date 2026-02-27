import { nextDay } from "../nextDay/index.js";
import type { AnyTemporalDate } from "../types.js";

export function nextThursday(
    date: Temporal.ZonedDateTime,
): Temporal.ZonedDateTime;
export function nextThursday(
    date: Temporal.PlainDateTime,
): Temporal.PlainDateTime;
export function nextThursday(date: Temporal.PlainDate): Temporal.PlainDate;
export function nextThursday(date: AnyTemporalDate): AnyTemporalDate {
    return nextDay(date as Temporal.PlainDate, 4);
}
