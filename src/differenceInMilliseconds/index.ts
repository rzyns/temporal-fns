import type { AnyTemporalInstant } from "../types.js";

export function differenceInMilliseconds(
    dateLeft: AnyTemporalInstant,
    dateRight: AnyTemporalInstant,
): number {
    return dateLeft.epochMilliseconds - dateRight.epochMilliseconds;
}
