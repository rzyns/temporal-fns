import type { AnyTemporalInstant, NowOptions } from "../types.js";
import { systemClock } from "../types.js";

/**
 * Is the given date in the future?
 */
export function isFuture(
  date: AnyTemporalInstant,
  options?: NowOptions,
): boolean {
  const clock = options?.clock ?? systemClock;
  return date.epochNanoseconds > clock.instant().epochNanoseconds;
}
