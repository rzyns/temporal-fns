import type { AnyTemporalDate, TemporalInterval } from "../types.js";
import { compareAsc } from "../compareAsc/index.js";

export function isWithinInterval<T extends AnyTemporalDate>(
  date: T,
  interval: TemporalInterval<T>,
): boolean {
  return (
    compareAsc(date, interval.start) >= 0 &&
    compareAsc(date, interval.end) <= 0
  );
}
