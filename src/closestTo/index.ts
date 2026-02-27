import type { AnyTemporalDate } from "../types.js";

function toPlainDate(date: AnyTemporalDate): Temporal.PlainDate {
    if (date instanceof Temporal.PlainDate) return date;
    return date.toPlainDate();
}

export function closestTo<T extends AnyTemporalDate>(
    dateToCompare: T,
    datesArray: readonly T[],
): T | undefined {
    if (datesArray.length === 0) return undefined;

    const targetDate = toPlainDate(dateToCompare);
    let closest: T | undefined;
    let closestDiff = Number.POSITIVE_INFINITY;

    for (const date of datesArray) {
        const candidateDate = toPlainDate(date);
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
