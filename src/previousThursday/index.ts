import { previousDay } from "../previousDay/index.js";
import type { AnyTemporalDate } from "../types.js";

export function previousThursday(date: Temporal.ZonedDateTime): Temporal.ZonedDateTime;
export function previousThursday(date: Temporal.PlainDateTime): Temporal.PlainDateTime;
export function previousThursday(date: Temporal.PlainDate): Temporal.PlainDate;
export function previousThursday(date: AnyTemporalDate): AnyTemporalDate {
  return previousDay(date as Temporal.PlainDate, 4);
}
