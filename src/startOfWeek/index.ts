import { type TemporalOf, withDate } from "../_lib/temporalOf.js";
import type { AnyTemporalDate, WeekOptions } from "../types.js";

export function startOfWeek<T extends AnyTemporalDate>(
    date: T,
    options?: WeekOptions,
): TemporalOf<T> {
    return withDate(date, (d) => {
        const dayOfWeek = d.dayOfWeek;
        const weekStartsOn = options?.weekStartsOn ?? 1;
        const diff = (dayOfWeek - weekStartsOn + 7) % 7;
        const result = d.subtract({ days: diff });
        if (result instanceof Temporal.PlainDate) return result;
        return result.with({
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0,
            microsecond: 0,
            nanosecond: 0,
        });
    });
}
