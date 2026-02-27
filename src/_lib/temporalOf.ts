import type { AnyTemporalDate } from "../types.js";

/**
 * Maps an AnyTemporalDate subtype to itself.
 * Use this to express "this function returns the same concrete subtype it received."
 *
 * Internal use only — not exported from the public API.
 */
export type TemporalOf<T extends AnyTemporalDate> =
    T extends Temporal.ZonedDateTime
        ? Temporal.ZonedDateTime
        : T extends Temporal.PlainDateTime
          ? Temporal.PlainDateTime
          : T extends Temporal.PlainDate
            ? Temporal.PlainDate
            : never;

/**
 * Applies a transform to a date value and re-casts to the input subtype.
 * Safe because all type-preserving functions already route by instanceof internally.
 *
 * Internal use only.
 */
export function withDate<T extends AnyTemporalDate>(
    date: T,
    transform: (d: AnyTemporalDate) => AnyTemporalDate,
): TemporalOf<T> {
    return transform(date) as TemporalOf<T>;
}
