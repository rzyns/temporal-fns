import type { TemporalOf } from "../_lib/temporalOf.js";
import { previousDay } from "../previousDay/index.js";
import type { AnyTemporalDate } from "../types.js";

export function previousMonday<T extends AnyTemporalDate>(
    date: T,
): TemporalOf<T> {
    return previousDay(date, 1);
}
