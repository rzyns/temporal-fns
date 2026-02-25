import { nextDay } from "../nextDay/index.js";
import type { AnyTemporalDate } from "../types.js";

export function nextSaturday(date: Temporal.ZonedDateTime): Temporal.ZonedDateTime;
export function nextSaturday(date: Temporal.PlainDateTime): Temporal.PlainDateTime;
export function nextSaturday(date: Temporal.PlainDate): Temporal.PlainDate;
export function nextSaturday(date: AnyTemporalDate): AnyTemporalDate {
  return nextDay(date as Temporal.PlainDate, 6);
}
