import { nextDay } from "../nextDay/index.js";
import type { AnyTemporalDate } from "../types.js";

export function nextTuesday(
  date: Temporal.ZonedDateTime,
): Temporal.ZonedDateTime;
export function nextTuesday(
  date: Temporal.PlainDateTime,
): Temporal.PlainDateTime;
export function nextTuesday(date: Temporal.PlainDate): Temporal.PlainDate;
export function nextTuesday(date: AnyTemporalDate): AnyTemporalDate {
  return nextDay(date as Temporal.PlainDate, 2);
}
