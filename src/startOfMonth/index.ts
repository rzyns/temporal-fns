import { type TemporalOf, withDate } from "../_lib/temporalOf.js";
import type { AnyTemporalDate } from "../types.js";

export function startOfMonth<T extends AnyTemporalDate>(
    date: T,
): TemporalOf<T> {
    return withDate(date, (d) => {
        if (d instanceof Temporal.PlainDate) return d.with({ day: 1 });
        return d.with({
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0,
            microsecond: 0,
            nanosecond: 0,
        });
    });
}
