import type { AnyTemporalDate, TemporalInterval } from "../types.js";

function toPlainDate(date: AnyTemporalDate): Temporal.PlainDate {
  if (date instanceof Temporal.PlainDate) return date;
  return date.toPlainDate();
}

export function intervalToDuration<T extends AnyTemporalDate>(
  interval: TemporalInterval<T>,
): Temporal.Duration {
  return toPlainDate(interval.end).since(toPlainDate(interval.start), {
    largestUnit: "year",
  });
}
