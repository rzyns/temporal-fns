import { type TemporalOf, withDate } from "../_lib/temporalOf.js";
import type { AnyTemporalDate } from "../types.js";

export function add<T extends AnyTemporalDate>(
    date: T,
    duration: Temporal.Duration | Temporal.DurationLike,
): TemporalOf<T> {
    return withDate(date, (d) => d.add(duration));
}
