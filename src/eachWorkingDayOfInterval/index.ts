import { compareAsc } from "../compareAsc/index.js";
import type {
  AnyTemporalDate,
  DayOfWeek,
  TemporalInterval,
  WorkingDayOptions,
} from "../types.js";

const DEFAULT_WORKING_DAYS: ReadonlyArray<DayOfWeek> = [1, 2, 3, 4, 5];

export function eachWorkingDayOfInterval<T extends AnyTemporalDate>(
  interval: TemporalInterval<T>,
  options?: WorkingDayOptions,
): T[] {
  const workingDays = options?.workingDays ?? DEFAULT_WORKING_DAYS;
  const days: T[] = [];
  let current = interval.start;
  while (compareAsc(current, interval.end) <= 0) {
    if (workingDays.includes(current.dayOfWeek as DayOfWeek)) {
      days.push(current);
    }
    current = current.add({ days: 1 }) as T;
  }
  return days;
}
