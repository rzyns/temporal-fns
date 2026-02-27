import { nextDay } from "../nextDay/index.js";
import type { AnyTemporalDate } from "../types.js";

export function nextWednesday(
    date: Temporal.ZonedDateTime,
): Temporal.ZonedDateTime;
export function nextWednesday(
    date: Temporal.PlainDateTime,
): Temporal.PlainDateTime;
export function nextWednesday(date: Temporal.PlainDate): Temporal.PlainDate;
export function nextWednesday(date: AnyTemporalDate): AnyTemporalDate {
    return nextDay(date as Temporal.PlainDate, 3);
}
