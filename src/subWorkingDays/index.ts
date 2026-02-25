import { addWorkingDays } from "../addWorkingDays/index.js";
import type { AnyTemporalDate, WorkingDayOptions } from "../types.js";

export function subWorkingDays(date: Temporal.ZonedDateTime, amount: number, options?: WorkingDayOptions): Temporal.ZonedDateTime;
export function subWorkingDays(date: Temporal.PlainDateTime, amount: number, options?: WorkingDayOptions): Temporal.PlainDateTime;
export function subWorkingDays(date: Temporal.PlainDate, amount: number, options?: WorkingDayOptions): Temporal.PlainDate;
export function subWorkingDays(date: AnyTemporalDate, amount: number, options?: WorkingDayOptions): AnyTemporalDate {
  return addWorkingDays(date as Temporal.PlainDate, -amount, options);
}
