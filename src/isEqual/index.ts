import { compareAsc } from "../compareAsc/index.js";
import type { AnyTemporalComparable, AnyTemporalDate } from "../types.js";

/**
 * Are the two dates equal?
 *
 * Compares wall-clock date parts (and time parts if both have them).
 * For Instant operands, compares exact points in time.
 */
export function isEqual(
    date: Temporal.Instant,
    dateToCompare: Temporal.Instant,
): boolean;
export function isEqual(
    date: Temporal.Instant,
    dateToCompare: Temporal.ZonedDateTime,
): boolean;
export function isEqual(
    date: Temporal.ZonedDateTime,
    dateToCompare: Temporal.Instant,
): boolean;
export function isEqual(
    date: AnyTemporalDate,
    dateToCompare: AnyTemporalDate,
): boolean;
export function isEqual(
    date: AnyTemporalComparable,
    dateToCompare: AnyTemporalComparable,
): boolean;
export function isEqual(
    date: AnyTemporalComparable,
    dateToCompare: AnyTemporalComparable,
): boolean {
    return compareAsc(date, dateToCompare) === 0;
}
