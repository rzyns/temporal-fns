import { type TemporalOf, withDate } from "../_lib/temporalOf.js";
import type { AnyTemporalDate } from "../types.js";

export function endOfDay<T extends AnyTemporalDate>(date: T): TemporalOf<T> {
    return withDate(date, (d) => {
        if (d instanceof Temporal.PlainDate) return d;
        return d.with({
            hour: 23,
            minute: 59,
            second: 59,
            millisecond: 999,
            microsecond: 999,
            nanosecond: 999,
        });
    });
}
