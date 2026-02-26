import type { AnyTemporalDate } from "../types.js";

export function startOfQuarter(
  date: Temporal.ZonedDateTime,
): Temporal.ZonedDateTime;
export function startOfQuarter(
  date: Temporal.PlainDateTime,
): Temporal.PlainDateTime;
export function startOfQuarter(date: Temporal.PlainDate): Temporal.PlainDate;
export function startOfQuarter(date: AnyTemporalDate): AnyTemporalDate {
  const quarter = Math.ceil(date.month / 3);
  const firstMonth = (quarter - 1) * 3 + 1;
  if (date instanceof Temporal.PlainDate)
    return date.with({ month: firstMonth, day: 1 });
  return date.with({
    month: firstMonth,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
    microsecond: 0,
    nanosecond: 0,
  });
}
