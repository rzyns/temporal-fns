import type {
    AnyTemporalDate,
    DayOfWeek,
    WorkingDayOptions,
} from "../types.js";

const DEFAULT_WORKING_DAYS: ReadonlyArray<DayOfWeek> = [1, 2, 3, 4, 5];

export function addWorkingDays(
    date: Temporal.ZonedDateTime,
    amount: number,
    options?: WorkingDayOptions,
): Temporal.ZonedDateTime;
export function addWorkingDays(
    date: Temporal.PlainDateTime,
    amount: number,
    options?: WorkingDayOptions,
): Temporal.PlainDateTime;
export function addWorkingDays(
    date: Temporal.PlainDate,
    amount: number,
    options?: WorkingDayOptions,
): Temporal.PlainDate;
export function addWorkingDays(
    date: AnyTemporalDate,
    amount: number,
    options?: WorkingDayOptions,
): AnyTemporalDate {
    const workingDays = options?.workingDays ?? DEFAULT_WORKING_DAYS;
    const direction = amount >= 0 ? 1 : -1;
    let remaining = Math.abs(amount);
    let current = date;

    while (remaining > 0) {
        current = current.add({ days: direction });
        if (workingDays.includes(current.dayOfWeek as DayOfWeek)) {
            remaining--;
        }
    }
    return current;
}
