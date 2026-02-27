import type { TemporalOf } from "../_lib/temporalOf.js";
import { nextDay } from "../nextDay/index.js";
import type { AnyTemporalDate } from "../types.js";

export function nextTuesday<T extends AnyTemporalDate>(date: T): TemporalOf<T> {
    return nextDay(date, 2);
}
