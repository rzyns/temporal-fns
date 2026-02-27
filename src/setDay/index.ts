import { type TemporalOf, withDate } from "../_lib/temporalOf.js";
import { startOfWeek } from "../startOfWeek/index.js";
import type { AnyTemporalDate, DayOfWeek, WeekOptions } from "../types.js";

/**
 * Sets the day of the week of the given date, navigating to that weekday
 * within the same week (as defined by the weekStartsOn option).
 *
 * @param date - The date to modify
 * @param day - The target day of week (1=Monday ... 7=Sunday, ISO 8601)
 * @param options - Week options (weekStartsOn, defaults to 1=Monday)
 * @returns A new date set to the target weekday within the same week
 */
export function setDay<T extends AnyTemporalDate>(
    date: T,
    day: DayOfWeek,
    options?: WeekOptions,
): TemporalOf<T> {
    return withDate(date, (d) => {
        const weekStartsOn = options?.weekStartsOn ?? 1;
        const weekStart = startOfWeek(d as Temporal.PlainDate, options);
        const targetOffset = (day - weekStartsOn + 7) % 7;
        return weekStart.add({ days: targetOffset });
    });
}
