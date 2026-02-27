import type { TemporalOf } from "../_lib/temporalOf.js";
import { addWorkingDays } from "../addWorkingDays/index.js";
import type { AnyTemporalDate, WorkingDayOptions } from "../types.js";

export function subWorkingDays<T extends AnyTemporalDate>(
    date: T,
    amount: number,
    options?: WorkingDayOptions,
): TemporalOf<T> {
    return addWorkingDays(date, -amount, options);
}
