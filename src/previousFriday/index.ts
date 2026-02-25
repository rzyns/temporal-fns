import { previousDay } from "../previousDay/index.js";
import type { AnyTemporalDate } from "../types.js";

export function previousFriday(date: Temporal.ZonedDateTime): Temporal.ZonedDateTime;
export function previousFriday(date: Temporal.PlainDateTime): Temporal.PlainDateTime;
export function previousFriday(date: Temporal.PlainDate): Temporal.PlainDate;
export function previousFriday(date: AnyTemporalDate): AnyTemporalDate {
  return previousDay(date as Temporal.PlainDate, 5);
}
