import type { NowOptions } from "../types.js";
import { systemClock } from "../types.js";

/**
 * Is the given date in the same year as the current date?
 */
export function isThisYear(
  date: Temporal.ZonedDateTime,
  options?: NowOptions,
): boolean {
  const clock = options?.clock ?? systemClock;
  const now = clock.zonedDateTimeISO(date.timeZoneId);
  return date.year === now.year;
}
