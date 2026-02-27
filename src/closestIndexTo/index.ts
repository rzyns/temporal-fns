import type { AnyTemporalComparable, AnyTemporalDate } from "../types.js";

function toPlainDate(date: AnyTemporalDate): Temporal.PlainDate {
    if (date instanceof Temporal.PlainDate) return date;
    return date.toPlainDate();
}

function toEpochMs(d: AnyTemporalComparable): number {
    if (d instanceof Temporal.Instant) return d.epochMilliseconds;
    if (d instanceof Temporal.ZonedDateTime) return d.epochMilliseconds;
    const typeName =
        d instanceof Temporal.PlainDate ? "PlainDate" : "PlainDateTime";
    throw new TypeError(
        `Cannot compare a ${typeName} with a Temporal.Instant: wall-clock types have no defined epoch. Convert to ZonedDateTime first.`,
    );
}

export function closestIndexTo<T extends AnyTemporalComparable>(
    dateToCompare: T,
    datesArray: readonly T[],
): number {
    if (datesArray.length === 0) return -1;

    const useEpoch =
        dateToCompare instanceof Temporal.Instant ||
        datesArray.some((d) => d instanceof Temporal.Instant);

    if (useEpoch) {
        const targetMs = toEpochMs(dateToCompare);
        let closestIndex = 0;
        let closestDiff = Number.POSITIVE_INFINITY;
        for (let i = 0; i < datesArray.length; i++) {
            const entry = datesArray[i] as T;
            const diff = Math.abs(targetMs - toEpochMs(entry));
            if (diff < closestDiff) {
                closestDiff = diff;
                closestIndex = i;
            }
        }
        return closestIndex;
    }

    const targetDate = toPlainDate(dateToCompare as AnyTemporalDate);
    let closestIndex = 0;
    let closestDiff = Number.POSITIVE_INFINITY;

    for (let i = 0; i < datesArray.length; i++) {
        const entry = datesArray[i] as T;
        const candidateDate = toPlainDate(entry as AnyTemporalDate);
        const diff = Math.abs(
            targetDate
                .since(candidateDate, { largestUnit: "day" })
                .total({ unit: "day" }),
        );
        if (diff < closestDiff) {
            closestDiff = diff;
            closestIndex = i;
        }
    }
    return closestIndex;
}
