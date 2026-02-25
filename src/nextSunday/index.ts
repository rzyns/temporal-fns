import { nextDay } from "../nextDay/index.js";
import type { AnyTemporalDate } from "../types.js";

export function nextSunday(date: Temporal.ZonedDateTime): Temporal.ZonedDateTime;
export function nextSunday(date: Temporal.PlainDateTime): Temporal.PlainDateTime;
export function nextSunday(date: Temporal.PlainDate): Temporal.PlainDate;
export function nextSunday(date: AnyTemporalDate): AnyTemporalDate {
  return nextDay(date as Temporal.PlainDate, 7);
}
