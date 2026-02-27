import { toTimeZone } from "../toTimeZone/index.js";
import type { ClockProvider } from "../types.js";
import { systemClock } from "../types.js";

export function toLocal(
    date: Temporal.Instant | Temporal.ZonedDateTime,
    options?: { clock?: ClockProvider },
): Temporal.ZonedDateTime {
    const clock = options?.clock ?? systemClock;
    return toTimeZone(date, clock.timeZoneId());
}
