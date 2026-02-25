import { systemClock } from "../types.js";
import type { NowOptions } from "../types.js";

/**
 * Is the given date tomorrow?
 */
export function isTomorrow(
  date: Temporal.ZonedDateTime,
  options?: NowOptions,
): boolean {
  const clock = options?.clock ?? systemClock;
  const tomorrow = clock.plainDateISO(date.timeZoneId).add({ days: 1 });
  return date.toPlainDate().equals(tomorrow);
}
