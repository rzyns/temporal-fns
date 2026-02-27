import type { AnyTemporalComparable, AnyTemporalDate } from "../types.js";

function toPlainDate(d: AnyTemporalDate): Temporal.PlainDate {
    if (d instanceof Temporal.PlainDate) return d;
    return d.toPlainDate();
}

function hasTime(
    d: AnyTemporalDate,
): d is Temporal.PlainDateTime | Temporal.ZonedDateTime {
    return (
        d instanceof Temporal.PlainDateTime ||
        d instanceof Temporal.ZonedDateTime
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
 *
 * When either operand is a Temporal.Instant, comparison uses Temporal.Instant.compare().
 * ZonedDateTime is converted to Instant via .toInstant() for this path.
 * Mixing Instant with PlainDate or PlainDateTime throws a TypeError.
 */
export function compareAsc(
    dateLeft: Temporal.Instant,
    dateRight: Temporal.Instant,
): -1 | 0 | 1;
export function compareAsc(
    dateLeft: Temporal.Instant,
    dateRight: Temporal.ZonedDateTime,
): -1 | 0 | 1;
export function compareAsc(
    dateLeft: Temporal.ZonedDateTime,
    dateRight: Temporal.Instant,
): -1 | 0 | 1;
export function compareAsc(
    dateLeft: AnyTemporalDate,
    dateRight: AnyTemporalDate,
): -1 | 0 | 1;
export function compareAsc(
    dateLeft: AnyTemporalComparable,
    dateRight: AnyTemporalComparable,
): -1 | 0 | 1;
export function compareAsc(
    dateLeft: AnyTemporalComparable,
    dateRight: AnyTemporalComparable,
): -1 | 0 | 1 {
    const leftIsInstant = dateLeft instanceof Temporal.Instant;
    const rightIsInstant = dateRight instanceof Temporal.Instant;

    if (leftIsInstant || rightIsInstant) {
        if (
            leftIsInstant &&
            (dateRight instanceof Temporal.PlainDate ||
                dateRight instanceof Temporal.PlainDateTime)
        ) {
            const typeName =
                dateRight instanceof Temporal.PlainDate
                    ? "PlainDate"
                    : "PlainDateTime";
            throw new TypeError(
                `Cannot compare a ${typeName} with a Temporal.Instant: wall-clock types have no defined epoch. Convert to ZonedDateTime first.`,
            );
        }
        if (
            rightIsInstant &&
            (dateLeft instanceof Temporal.PlainDate ||
                dateLeft instanceof Temporal.PlainDateTime)
        ) {
            const typeName =
                dateLeft instanceof Temporal.PlainDate
                    ? "PlainDate"
                    : "PlainDateTime";
            throw new TypeError(
                `Cannot compare a ${typeName} with a Temporal.Instant: wall-clock types have no defined epoch. Convert to ZonedDateTime first.`,
            );
        }

        const leftInstant = leftIsInstant
            ? dateLeft
            : (dateLeft as Temporal.ZonedDateTime).toInstant();
        const rightInstant = rightIsInstant
            ? dateRight
            : (dateRight as Temporal.ZonedDateTime).toInstant();
        const cmp = Temporal.Instant.compare(leftInstant, rightInstant);
        if (cmp < 0) return -1;
        if (cmp > 0) return 1;
        return 0;
    }

    const dateComp = Temporal.PlainDate.compare(
        toPlainDate(dateLeft as AnyTemporalDate),
        toPlainDate(dateRight as AnyTemporalDate),
    );
    if (dateComp < 0) return -1;
    if (dateComp > 0) return 1;

    const leftHasTime = hasTime(dateLeft as AnyTemporalDate);
    const rightHasTime = hasTime(dateRight as AnyTemporalDate);

    if (leftHasTime && rightHasTime) {
        const timeComp = Temporal.PlainTime.compare(
            toPlainTime(
                dateLeft as Temporal.PlainDateTime | Temporal.ZonedDateTime,
            ),
            toPlainTime(
                dateRight as Temporal.PlainDateTime | Temporal.ZonedDateTime,
            ),
        );
        if (timeComp < 0) return -1;
        if (timeComp > 0) return 1;
    }

    return 0;
}
