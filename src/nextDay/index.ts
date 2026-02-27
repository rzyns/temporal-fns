import { type TemporalOf, withDate } from "../_lib/temporalOf.js";
import type { AnyTemporalDate, DayOfWeek } from "../types.js";

export function nextDay<T extends AnyTemporalDate>(
    date: T,
    day: DayOfWeek,
): TemporalOf<T> {
    return withDate(date, (d) => {
        let result = d.add({ days: 1 });
        while (result.dayOfWeek !== day) {
            result = result.add({ days: 1 });
        }
        return result;
    });
}
