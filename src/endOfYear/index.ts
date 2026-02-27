import { type TemporalOf, withDate } from "../_lib/temporalOf.js";
import type { AnyTemporalDate } from "../types.js";

export function endOfYear<T extends AnyTemporalDate>(date: T): TemporalOf<T> {
    return withDate(date, (d) => {
        if (d instanceof Temporal.PlainDate)
            return d.with({ month: 12, day: 31 });
        return d.with({
            month: 12,
            day: 31,
            hour: 23,
            minute: 59,
            second: 59,
            millisecond: 999,
            microsecond: 999,
            nanosecond: 999,
        });
    });
}
