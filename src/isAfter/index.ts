import { compareAsc } from "../compareAsc/index.js";
import type { AnyTemporalComparable, AnyTemporalDate } from "../types.js";

/**
 * Is the first date after the second one?
 */
export function isAfter(
    date: Temporal.Instant,
    dateToCompare: Temporal.Instant,
): boolean;
export function isAfter(
    date: Temporal.Instant,
    dateToCompare: Temporal.ZonedDateTime,
): boolean;
export function isAfter(
    date: Temporal.ZonedDateTime,
    dateToCompare: Temporal.Instant,
): boolean;
export function isAfter(
    date: AnyTemporalDate,
    dateToCompare: AnyTemporalDate,
): boolean;
export function isAfter(
    date: AnyTemporalComparable,
    dateToCompare: AnyTemporalComparable,
): boolean;
export function isAfter(
    date: AnyTemporalComparable,
    dateToCompare: AnyTemporalComparable,
): boolean {
    return compareAsc(date, dateToCompare) === 1;
}
