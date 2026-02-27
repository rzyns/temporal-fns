import { startOfWeek } from "../startOfWeek/index.js";
import type { NowOptions, WeekOptions } from "../types.js";
import { systemClock } from "../types.js";

/**
 * Is the given date in the same week as the current date?
 */
export function isThisWeek(
    date: Temporal.ZonedDateTime,
    options?: NowOptions & WeekOptions,
): boolean {
    const clock = options?.clock ?? systemClock;
    const now = clock.zonedDateTimeISO(date.timeZoneId);
    const dateWeekStart = startOfWeek(date, options).toPlainDate();
    const nowWeekStart = startOfWeek(now, options).toPlainDate();
    return dateWeekStart.equals(nowWeekStart);
}
