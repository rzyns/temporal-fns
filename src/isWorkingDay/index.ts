import type {
    AnyTemporalDate,
    DayOfWeek,
    WorkingDayOptions,
} from "../types.js";

const DEFAULT_WORKING_DAYS: ReadonlyArray<DayOfWeek> = [1, 2, 3, 4, 5];

export function isWorkingDay(
    date: AnyTemporalDate,
    options?: WorkingDayOptions,
): boolean {
    const workingDays = options?.workingDays ?? DEFAULT_WORKING_DAYS;
    return workingDays.includes(date.dayOfWeek as DayOfWeek);
}
