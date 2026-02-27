import type { AnyTemporalDate, DayOfWeek } from "../types.js";

export function previousDay(
    date: Temporal.ZonedDateTime,
    day: DayOfWeek,
): Temporal.ZonedDateTime;
export function previousDay(
    date: Temporal.PlainDateTime,
    day: DayOfWeek,
): Temporal.PlainDateTime;
export function previousDay(
    date: Temporal.PlainDate,
    day: DayOfWeek,
): Temporal.PlainDate;
export function previousDay(
    date: AnyTemporalDate,
    day: DayOfWeek,
): AnyTemporalDate {
    let result = date.subtract({ days: 1 });
    while (result.dayOfWeek !== day) {
        result = result.subtract({ days: 1 });
    }
    return result;
}
