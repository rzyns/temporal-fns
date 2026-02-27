import { compareAsc } from "../compareAsc/index.js";
import { startOfMonth } from "../startOfMonth/index.js";
import type { AnyTemporalDate, TemporalInterval } from "../types.js";

export function eachMonthOfInterval<T extends AnyTemporalDate>(
    interval: TemporalInterval<T>,
): T[] {
    const months: T[] = [];
    let current = startOfMonth(interval.start as Temporal.PlainDate) as T;
    while (compareAsc(current, interval.end) <= 0) {
        months.push(current);
        current = current.add({ months: 1 }) as T;
    }
    return months;
}
