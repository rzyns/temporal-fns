import { previousDay } from "../previousDay/index.js";
import type { AnyTemporalDate } from "../types.js";

export function previousMonday(date: Temporal.ZonedDateTime): Temporal.ZonedDateTime;
export function previousMonday(date: Temporal.PlainDateTime): Temporal.PlainDateTime;
export function previousMonday(date: Temporal.PlainDate): Temporal.PlainDate;
export function previousMonday(date: AnyTemporalDate): AnyTemporalDate {
  return previousDay(date as Temporal.PlainDate, 1);
}
