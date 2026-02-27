import type { AnyTemporalDate } from "../types.js";

export function endOfQuarter(
    date: Temporal.ZonedDateTime,
): Temporal.ZonedDateTime;
export function endOfQuarter(
    date: Temporal.PlainDateTime,
): Temporal.PlainDateTime;
export function endOfQuarter(date: Temporal.PlainDate): Temporal.PlainDate;
export function endOfQuarter(date: AnyTemporalDate): AnyTemporalDate {
    const quarter = Math.ceil(date.month / 3);
    const lastMonth = quarter * 3;
    if (date instanceof Temporal.PlainDate) {
        const withMonth = date.with({ month: lastMonth });
        return withMonth.with({ day: withMonth.daysInMonth });
    }
    const withMonth = date.with({ month: lastMonth });
    return withMonth.with({
        day: withMonth.daysInMonth,
        hour: 23,
        minute: 59,
        second: 59,
        millisecond: 999,
        microsecond: 999,
        nanosecond: 999,
    });
}
