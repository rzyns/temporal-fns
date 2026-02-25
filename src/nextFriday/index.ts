import { nextDay } from "../nextDay/index.js";
import type { AnyTemporalDate } from "../types.js";

export function nextFriday(date: Temporal.ZonedDateTime): Temporal.ZonedDateTime;
export function nextFriday(date: Temporal.PlainDateTime): Temporal.PlainDateTime;
export function nextFriday(date: Temporal.PlainDate): Temporal.PlainDate;
export function nextFriday(date: AnyTemporalDate): AnyTemporalDate {
  return nextDay(date as Temporal.PlainDate, 5);
}
