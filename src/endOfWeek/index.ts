import { type TemporalOf, withDate } from "../_lib/temporalOf.js";
import type { AnyTemporalDate, WeekOptions } from "../types.js";

export function endOfWeek<T extends AnyTemporalDate>(
    date: T,
    options?: WeekOptions,
): TemporalOf<T> {
    return withDate(date, (d) => {
        const dayOfWeek = d.dayOfWeek;
        const weekStartsOn = options?.weekStartsOn ?? 1;
        const diff = (dayOfWeek - weekStartsOn + 7) % 7;
        const endDaysToAdd = 6 - diff;
        const result = d.add({ days: endDaysToAdd });
        if (result instanceof Temporal.PlainDate) return result;
        return result.with({
            hour: 23,
            minute: 59,
            second: 59,
            millisecond: 999,
            microsecond: 999,
            nanosecond: 999,
        });
    });
}
