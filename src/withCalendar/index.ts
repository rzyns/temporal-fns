import { type TemporalOf, withDate } from "../_lib/temporalOf.js";
import type { AnyTemporalDate } from "../types.js";

export function withCalendar<T extends AnyTemporalDate>(
    date: T,
    calendar: string,
): TemporalOf<T> {
    return withDate(date, (d) => d.withCalendar(calendar));
}
