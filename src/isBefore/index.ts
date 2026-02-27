import { compareAsc } from "../compareAsc/index.js";
import type { AnyTemporalComparable, AnyTemporalDate } from "../types.js";

/**
 * Is the first date before the second one?
 */
export function isBefore(
    date: Temporal.Instant,
    dateToCompare: Temporal.Instant,
): boolean;
export function isBefore(
    date: Temporal.Instant,
    dateToCompare: Temporal.ZonedDateTime,
): boolean;
export function isBefore(
    date: Temporal.ZonedDateTime,
    dateToCompare: Temporal.Instant,
): boolean;
export function isBefore(
    date: AnyTemporalDate,
    dateToCompare: AnyTemporalDate,
): boolean;
export function isBefore(
    date: AnyTemporalComparable,
    dateToCompare: AnyTemporalComparable,
): boolean;
export function isBefore(
    date: AnyTemporalComparable,
    dateToCompare: AnyTemporalComparable,
): boolean {
    return compareAsc(date, dateToCompare) === -1;
}
