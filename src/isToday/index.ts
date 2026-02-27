import { systemClock } from "../types.js";
import type { NowOptions } from "../types.js";

/**
 * Is the given date today?
 */
export function isToday(
    date: Temporal.ZonedDateTime,
    options?: NowOptions,
): boolean {
    const clock = options?.clock ?? systemClock;
    const today = clock.plainDateISO(date.timeZoneId);
    return date.toPlainDate().equals(today);
}
