import { compareAsc } from "../compareAsc/index.js";
import type { AnyTemporalComparable } from "../types.js";

export function clamp<T extends AnyTemporalComparable>(
    date: T,
    interval: { start: T; end: T },
): T {
    if (compareAsc(date, interval.start) < 0) return interval.start;
    if (compareAsc(date, interval.end) > 0) return interval.end;
    return date;
}
