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

export function closestTo<T extends AnyTemporalComparable>(
    dateToCompare: T,
    datesArray: readonly T[],
): T | undefined {
    if (datesArray.length === 0) return undefined;

    const useEpoch =
        dateToCompare instanceof Temporal.Instant ||
        datesArray.some((d) => d instanceof Temporal.Instant);

    if (useEpoch) {
        const targetMs = toEpochMs(dateToCompare);
        let closest: T | undefined;
        let closestDiff = Number.POSITIVE_INFINITY;
        for (const date of datesArray) {
            const diff = Math.abs(targetMs - toEpochMs(date));
            if (diff < closestDiff) {
                closestDiff = diff;
                closest = date;
            }
        }
        return closest;
    }

    const targetDate = toPlainDate(dateToCompare as AnyTemporalDate);
    let closest: T | undefined;
    let closestDiff = Number.POSITIVE_INFINITY;

    for (const date of datesArray) {
        const candidateDate = toPlainDate(date as AnyTemporalDate);
        const diff = Math.abs(
            targetDate
                .since(candidateDate, { largestUnit: "day" })
                .total({ unit: "day" }),
        );
        if (diff < closestDiff) {
            closestDiff = diff;
            closest = date;
        }
    }
    return closest;
}
