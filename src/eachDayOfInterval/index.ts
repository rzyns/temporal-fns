import type { AnyTemporalDate, TemporalInterval } from "../types.js";
import { compareAsc } from "../compareAsc/index.js";

export function eachDayOfInterval<T extends AnyTemporalDate>(
  interval: TemporalInterval<T>,
): T[] {
  const days: T[] = [];
  let current = interval.start;
  while (compareAsc(current, interval.end) <= 0) {
    days.push(current);
    current = current.add({ days: 1 }) as T;
  }
  return days;
}
