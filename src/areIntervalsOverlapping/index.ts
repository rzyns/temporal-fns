import { compareAsc } from "../compareAsc/index.js";
import type { AnyTemporalDate, TemporalInterval } from "../types.js";

export function areIntervalsOverlapping<T extends AnyTemporalDate>(
  intervalA: TemporalInterval<T>,
  intervalB: TemporalInterval<T>,
  options?: { inclusive?: boolean },
): boolean {
  const inclusive = options?.inclusive ?? false;
  if (inclusive) {
    return (
      compareAsc(intervalA.start, intervalB.end) <= 0 &&
      compareAsc(intervalB.start, intervalA.end) <= 0
    );
  }
  return (
    compareAsc(intervalA.start, intervalB.end) < 0 &&
    compareAsc(intervalB.start, intervalA.end) < 0
  );
}
