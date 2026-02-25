import { compareAsc } from "../compareAsc/index.js";
import type { AnyTemporalDate } from "../types.js";

/**
 * Return the latest of the given dates.
 *
 * @throws {TypeError} if the array is empty
 */
export function max<T extends AnyTemporalDate>(dates: readonly T[]): T {
  if (dates.length === 0) {
    throw new TypeError("max requires at least one date");
  }
  return dates.reduce((latest, date) =>
    compareAsc(date, latest) === 1 ? date : latest,
  );
}
