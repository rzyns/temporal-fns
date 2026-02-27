import type {
    AnyTemporalDate,
    DayOfWeek,
    WorkingDayOptions,
} from "../types.js";

const DEFAULT_WORKING_DAYS: ReadonlyArray<DayOfWeek> = [1, 2, 3, 4, 5];

function toPlainDate(date: AnyTemporalDate): Temporal.PlainDate {
    if (date instanceof Temporal.PlainDate) return date;
    return date.toPlainDate();
}

export function differenceInWorkingDays(
    dateLeft: AnyTemporalDate,
    dateRight: AnyTemporalDate,
    options?: WorkingDayOptions,
): number {
    const workingDays = options?.workingDays ?? DEFAULT_WORKING_DAYS;
    const left = toPlainDate(dateLeft);
    const right = toPlainDate(dateRight);

    const comp = Temporal.PlainDate.compare(left, right);
    if (comp === 0) return 0;

    const direction = comp > 0 ? -1 : 1; // iterate from left toward right
    let count = 0;
    let current = left;

    while (Temporal.PlainDate.compare(current, right) !== 0) {
        current = current.add({ days: direction });
        if (workingDays.includes(current.dayOfWeek as DayOfWeek)) {
            count++;
        }
    }

    // Return positive when left > right, negative when left < right
    return comp > 0 ? count : -count;
}
