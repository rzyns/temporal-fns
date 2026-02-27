import { previousDay } from "../previousDay/index.js";
import type { AnyTemporalDate } from "../types.js";

export function previousTuesday(
    date: Temporal.ZonedDateTime,
): Temporal.ZonedDateTime;
export function previousTuesday(
    date: Temporal.PlainDateTime,
): Temporal.PlainDateTime;
export function previousTuesday(date: Temporal.PlainDate): Temporal.PlainDate;
export function previousTuesday(date: AnyTemporalDate): AnyTemporalDate {
    return previousDay(date as Temporal.PlainDate, 2);
}
