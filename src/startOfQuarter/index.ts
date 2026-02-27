import { type TemporalOf, withDate } from "../_lib/temporalOf.js";
import type { AnyTemporalDate } from "../types.js";

export function startOfQuarter<T extends AnyTemporalDate>(
    date: T,
): TemporalOf<T> {
    return withDate(date, (d) => {
        const quarter = Math.ceil(d.month / 3);
        const firstMonth = (quarter - 1) * 3 + 1;
        if (d instanceof Temporal.PlainDate)
            return d.with({ month: firstMonth, day: 1 });
        return d.with({
            month: firstMonth,
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
