import { differenceInMonths } from "../differenceInMonths/index.js";
import type { AnyTemporalDate } from "../types.js";

export function differenceInCalendarQuarters(
  dateLeft: AnyTemporalDate,
  dateRight: AnyTemporalDate,
): number {
  return Math.trunc(differenceInMonths(dateLeft, dateRight) / 3);
}
