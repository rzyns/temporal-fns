import { type TemporalOf, withDate } from "../_lib/temporalOf.js";
import type {
    AnyTemporalDate,
    DayOfWeek,
    WorkingDayOptions,
} from "../types.js";

const DEFAULT_WORKING_DAYS: ReadonlyArray<DayOfWeek> = [1, 2, 3, 4, 5];

export function addWorkingDays<T extends AnyTemporalDate>(
    date: T,
    amount: number,
    options?: WorkingDayOptions,
): TemporalOf<T> {
    return withDate(date, (d) => {
        const workingDays = options?.workingDays ?? DEFAULT_WORKING_DAYS;
        const direction = amount >= 0 ? 1 : -1;
        let remaining = Math.abs(amount);
        let current = d;

        while (remaining > 0) {
            current = current.add({ days: direction });
            if (workingDays.includes(current.dayOfWeek as DayOfWeek)) {
                remaining--;
            }
        }
        return current;
    });
}
