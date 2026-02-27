import { systemClock } from "../types.js";
import type { NowOptions } from "../types.js";

/**
 * Is the given date yesterday?
 */
export function isYesterday(
    date: Temporal.ZonedDateTime,
    options?: NowOptions,
): boolean {
    const clock = options?.clock ?? systemClock;
    const yesterday = clock.plainDateISO(date.timeZoneId).subtract({ days: 1 });
    return date.toPlainDate().equals(yesterday);
}
