import { type TemporalOf, withDate } from "../_lib/temporalOf.js";
import type { AnyTemporalDate, DayOfWeek } from "../types.js";

export function previousDay<T extends AnyTemporalDate>(
    date: T,
    day: DayOfWeek,
): TemporalOf<T> {
    return withDate(date, (d) => {
        let result = d.subtract({ days: 1 });
        while (result.dayOfWeek !== day) {
            result = result.subtract({ days: 1 });
        }
        return result;
    });
}
