import type { AnyTemporalDate } from "../types.js";

export function isZonedDateTimeInstance(
  v: AnyTemporalDate,
): v is Temporal.ZonedDateTime {
  return v instanceof Temporal.ZonedDateTime;
}

export function isPlainDateTimeInstance(
  v: AnyTemporalDate,
): v is Temporal.PlainDateTime {
  return v instanceof Temporal.PlainDateTime;
}

export function isPlainDateInstance(
  v: AnyTemporalDate,
): v is Temporal.PlainDate {
  return v instanceof Temporal.PlainDate;
}
