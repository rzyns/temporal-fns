import { compareAsc } from "../compareAsc/index.js";
import { startOfWeek } from "../startOfWeek/index.js";
import type {
  AnyTemporalDate,
  TemporalInterval,
  WeekOptions,
} from "../types.js";

export function eachWeekOfInterval<T extends AnyTemporalDate>(
  interval: TemporalInterval<T>,
  options?: WeekOptions,
): T[] {
  const weeks: T[] = [];
  let current = startOfWeek(interval.start as Temporal.PlainDate, options) as T;
  while (compareAsc(current, interval.end) <= 0) {
    weeks.push(current);
    current = current.add({ weeks: 1 }) as T;
  }
  return weeks;
}
