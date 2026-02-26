import { previousDay } from "../previousDay/index.js";
import type { AnyTemporalDate } from "../types.js";

export function previousWednesday(
  date: Temporal.ZonedDateTime,
): Temporal.ZonedDateTime;
export function previousWednesday(
  date: Temporal.PlainDateTime,
): Temporal.PlainDateTime;
export function previousWednesday(date: Temporal.PlainDate): Temporal.PlainDate;
export function previousWednesday(date: AnyTemporalDate): AnyTemporalDate {
  return previousDay(date as Temporal.PlainDate, 3);
}
