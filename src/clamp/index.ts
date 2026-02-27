import { compareAsc } from "../compareAsc/index.js";
import type { AnyTemporalDate, TemporalInterval } from "../types.js";

export function clamp<T extends AnyTemporalDate>(
    date: T,
    interval: TemporalInterval<T>,
): T {
    if (compareAsc(date, interval.start) < 0) return interval.start;
    if (compareAsc(date, interval.end) > 0) return interval.end;
    return date;
}
