import { compareAsc } from "../compareAsc/index.js";
import { startOfYear } from "../startOfYear/index.js";
import type { AnyTemporalDate, TemporalInterval } from "../types.js";

export function eachYearOfInterval<T extends AnyTemporalDate>(
    interval: TemporalInterval<T>,
): T[] {
    const years: T[] = [];
    let current = startOfYear(interval.start as Temporal.PlainDate) as T;
    while (compareAsc(current, interval.end) <= 0) {
        years.push(current);
        current = current.add({ years: 1 }) as T;
    }
    return years;
}
