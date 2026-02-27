import type { AnyTemporalDate } from "../types.js";

function toPlainDate(date: AnyTemporalDate): Temporal.PlainDate {
    if (date instanceof Temporal.PlainDate) return date;
    return date.toPlainDate();
}

export function closestIndexTo<T extends AnyTemporalDate>(
    dateToCompare: T,
    datesArray: readonly T[],
): number {
    if (datesArray.length === 0) return -1;

    const targetDate = toPlainDate(dateToCompare);
    let closestIndex = 0;
    let closestDiff = Number.POSITIVE_INFINITY;

    for (let i = 0; i < datesArray.length; i++) {
        const entry = datesArray[i] as T;
        const candidateDate = toPlainDate(entry);
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
