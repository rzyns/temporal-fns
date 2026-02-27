import type { AnyTemporalComparable, AnyTemporalInstant } from "../types.js";

function toEpochMs(d: AnyTemporalComparable): number {
    if (d instanceof Temporal.Instant) return d.epochMilliseconds;
    if (d instanceof Temporal.ZonedDateTime) return d.epochMilliseconds;
    const typeName =
        d instanceof Temporal.PlainDate ? "PlainDate" : "PlainDateTime";
    throw new TypeError(
        `Cannot compute millisecond difference for a ${typeName}: wall-clock types have no defined epoch. Convert to ZonedDateTime first.`,
    );
}

export function differenceInMilliseconds(
    dateLeft: Temporal.Instant,
    dateRight: Temporal.Instant,
): number;
export function differenceInMilliseconds(
    dateLeft: Temporal.Instant,
    dateRight: Temporal.ZonedDateTime,
): number;
export function differenceInMilliseconds(
    dateLeft: Temporal.ZonedDateTime,
    dateRight: Temporal.Instant,
): number;
export function differenceInMilliseconds(
    dateLeft: AnyTemporalInstant,
    dateRight: AnyTemporalInstant,
): number;
export function differenceInMilliseconds(
    dateLeft: AnyTemporalComparable,
    dateRight: AnyTemporalComparable,
): number;
export function differenceInMilliseconds(
    dateLeft: AnyTemporalComparable,
    dateRight: AnyTemporalComparable,
): number {
    return toEpochMs(dateLeft) - toEpochMs(dateRight);
}
