import { startOfWeek } from "../startOfWeek/index.js";
import type { AnyTemporalDate, WeekOptions } from "../types.js";

function toPlainDate(date: AnyTemporalDate): Temporal.PlainDate {
  if (date instanceof Temporal.PlainDate) return date;
  return date.toPlainDate();
}

export function differenceInCalendarWeeks(
  dateLeft: AnyTemporalDate,
  dateRight: AnyTemporalDate,
  options?: WeekOptions,
): number {
  const leftWeekStart = toPlainDate(
    startOfWeek(dateLeft as Temporal.PlainDate, options),
  );
  const rightWeekStart = toPlainDate(
    startOfWeek(dateRight as Temporal.PlainDate, options),
  );
  return leftWeekStart.since(rightWeekStart, {
    largestUnit: "week",
    smallestUnit: "week",
    roundingMode: "trunc",
  }).weeks;
}
