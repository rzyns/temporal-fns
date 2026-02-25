import type { AnyTemporalDate } from "../types.js";

function toPlainDate(date: AnyTemporalDate): Temporal.PlainDate {
  if (date instanceof Temporal.PlainDate) return date;
  return date.toPlainDate();
}

export function differenceInMonths(
  dateLeft: AnyTemporalDate,
  dateRight: AnyTemporalDate,
): number {
  const left = toPlainDate(dateLeft);
  const right = toPlainDate(dateRight);
  return left.since(right, {
    largestUnit: "month",
    smallestUnit: "month",
    roundingMode: "trunc",
  }).months;
}
