import type { AnyTemporalDate } from "../types.js";

export function isTemporalDate(value: unknown): value is AnyTemporalDate {
  return (
    value instanceof Temporal.PlainDate ||
    value instanceof Temporal.PlainDateTime ||
    value instanceof Temporal.ZonedDateTime
  );
}
