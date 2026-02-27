import type { AnyTemporalInstant, NowOptions } from "../types.js";
import { systemClock } from "../types.js";

/**
 * Is the given date in the past?
 */
export function isPast(
    date: AnyTemporalInstant,
    options?: NowOptions,
): boolean {
    const clock = options?.clock ?? systemClock;
    return date.epochNanoseconds < clock.instant().epochNanoseconds;
}
