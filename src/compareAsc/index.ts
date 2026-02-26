import type { AnyTemporalDate } from "../types.js";

function toPlainDate(d: AnyTemporalDate): Temporal.PlainDate {
  if (d instanceof Temporal.PlainDate) return d;
  return d.toPlainDate();
}

function hasTime(
  d: AnyTemporalDate,
): d is Temporal.PlainDateTime | Temporal.ZonedDateTime {
  return (
    d instanceof Temporal.PlainDateTime || d instanceof Temporal.ZonedDateTime
  );
}

function toPlainTime(
  d: Temporal.PlainDateTime | Temporal.ZonedDateTime,
): Temporal.PlainTime {
  return d.toPlainTime();
}

/**
 * Compare two dates and return -1 if left < right, 0 if equal, or 1 if left > right.
 *
 * For same types, uses the native Temporal compare function.
 * For mixed types, compares wall-clock date parts first, then time parts if both have them.
 */
export function compareAsc(
  dateLeft: AnyTemporalDate,
  dateRight: AnyTemporalDate,
): -1 | 0 | 1 {
  const dateComp = Temporal.PlainDate.compare(
    toPlainDate(dateLeft),
    toPlainDate(dateRight),
  );
  if (dateComp < 0) return -1;
  if (dateComp > 0) return 1;

  const leftHasTime = hasTime(dateLeft);
  const rightHasTime = hasTime(dateRight);

  if (leftHasTime && rightHasTime) {
    const timeComp = Temporal.PlainTime.compare(
      toPlainTime(dateLeft),
      toPlainTime(dateRight),
    );
    if (timeComp < 0) return -1;
    if (timeComp > 0) return 1;
  }

  return 0;
}
