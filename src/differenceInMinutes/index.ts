import type { AnyTemporalDateTime } from "../types.js";

export function differenceInMinutes(
    dateLeft: AnyTemporalDateTime,
    dateRight: AnyTemporalDateTime,
): number {
    if (
        dateLeft instanceof Temporal.ZonedDateTime &&
        dateRight instanceof Temporal.ZonedDateTime
    ) {
        const diffNs = dateLeft.epochNanoseconds - dateRight.epochNanoseconds;
        return Number(diffNs / 60_000_000_000n);
    }
    const left =
        dateLeft instanceof Temporal.ZonedDateTime
            ? dateLeft.toPlainDateTime()
            : dateLeft;
    const right =
        dateRight instanceof Temporal.ZonedDateTime
            ? dateRight.toPlainDateTime()
            : dateRight;
    return left.since(right, {
        largestUnit: "minute",
        smallestUnit: "minute",
        roundingMode: "trunc",
    }).minutes;
}
