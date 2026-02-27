import { type TemporalOf, withDate } from "../_lib/temporalOf.js";
import type { AnyTemporalDate } from "../types.js";

export function subYears<T extends AnyTemporalDate>(
    date: T,
    amount: number,
): TemporalOf<T> {
    return withDate(date, (d) => d.subtract({ years: amount }));
}
