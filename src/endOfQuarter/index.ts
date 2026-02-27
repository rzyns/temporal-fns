import { type TemporalOf, withDate } from "../_lib/temporalOf.js";
import type { AnyTemporalDate } from "../types.js";

export function endOfQuarter<T extends AnyTemporalDate>(
    date: T,
): TemporalOf<T> {
    return withDate(date, (d) => {
        const quarter = Math.ceil(d.month / 3);
        const lastMonth = quarter * 3;
        if (d instanceof Temporal.PlainDate) {
            const withMonth = d.with({ month: lastMonth });
            return withMonth.with({ day: withMonth.daysInMonth });
        }
        const withMonth = d.with({ month: lastMonth });
        return withMonth.with({
            day: withMonth.daysInMonth,
            hour: 23,
            minute: 59,
            second: 59,
            millisecond: 999,
            microsecond: 999,
            nanosecond: 999,
        });
    });
}
