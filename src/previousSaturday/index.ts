import { previousDay } from "../previousDay/index.js";
import type { AnyTemporalDate } from "../types.js";

export function previousSaturday(
  date: Temporal.ZonedDateTime,
): Temporal.ZonedDateTime;
export function previousSaturday(
  date: Temporal.PlainDateTime,
): Temporal.PlainDateTime;
export function previousSaturday(date: Temporal.PlainDate): Temporal.PlainDate;
export function previousSaturday(date: AnyTemporalDate): AnyTemporalDate {
  return previousDay(date as Temporal.PlainDate, 6);
}
