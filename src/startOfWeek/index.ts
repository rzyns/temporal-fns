import type { AnyTemporalDate, WeekOptions } from "../types.js";

export function startOfWeek(
    date: Temporal.ZonedDateTime,
    options?: WeekOptions,
): Temporal.ZonedDateTime;
export function startOfWeek(
    date: Temporal.PlainDateTime,
    options?: WeekOptions,
): Temporal.PlainDateTime;
export function startOfWeek(
    date: Temporal.PlainDate,
    options?: WeekOptions,
): Temporal.PlainDate;
export function startOfWeek(
    date: AnyTemporalDate,
    options?: WeekOptions,
): AnyTemporalDate {
    const dayOfWeek = date.dayOfWeek;
    const weekStartsOn = options?.weekStartsOn ?? 1;
    const diff = (dayOfWeek - weekStartsOn + 7) % 7;
    const result = date.subtract({ days: diff });
    if (result instanceof Temporal.PlainDate) return result;
    return result.with({
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
        microsecond: 0,
        nanosecond: 0,
    });
}
