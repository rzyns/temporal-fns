import { compareAsc } from "../compareAsc/index.js";
import type { AnyTemporalDate } from "../types.js";

/**
 * Return the earliest of the given dates.
 *
 * @throws {TypeError} if the array is empty
 */
export function min<T extends AnyTemporalDate>(dates: readonly T[]): T {
    if (dates.length === 0) {
        throw new TypeError("min requires at least one date");
    }
    return dates.reduce((earliest, date) =>
        compareAsc(date, earliest) === -1 ? date : earliest,
    );
}
