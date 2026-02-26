import { previousDay } from "../previousDay/index.js";
import type { AnyTemporalDate } from "../types.js";

export function previousSunday(
  date: Temporal.ZonedDateTime,
): Temporal.ZonedDateTime;
export function previousSunday(
  date: Temporal.PlainDateTime,
): Temporal.PlainDateTime;
export function previousSunday(date: Temporal.PlainDate): Temporal.PlainDate;
export function previousSunday(date: AnyTemporalDate): AnyTemporalDate {
  return previousDay(date as Temporal.PlainDate, 7);
}
