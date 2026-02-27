import { systemClock } from "../types.js";
import type { ClockProvider } from "../types.js";

/**
 * Formats a ZonedDateTime as a human-readable relative time string
 * (e.g. "in 3 hours", "yesterday", "2 months ago") using Intl.RelativeTimeFormat.
 *
 * @param date - The ZonedDateTime to format relative to now
 * @param options - Optional locale and clock override
 * @returns A human-readable relative time string
 */
export function formatRelative(
    date: Temporal.ZonedDateTime,
    options?: { locale?: string; clock?: ClockProvider },
): string {
    const clock = options?.clock ?? systemClock;
    const nowInstant = clock.instant();
    const diffMs = date.epochMilliseconds - nowInstant.epochMilliseconds;
    const absDiffMs = Math.abs(diffMs);

    const rtf = new Intl.RelativeTimeFormat(options?.locale ?? undefined, {
        numeric: "auto",
    });

    if (absDiffMs < 60_000)
        return rtf.format(Math.round(diffMs / 1000), "second");
    if (absDiffMs < 3_600_000)
        return rtf.format(Math.round(diffMs / 60_000), "minute");
    if (absDiffMs < 86_400_000)
        return rtf.format(Math.round(diffMs / 3_600_000), "hour");
    if (absDiffMs < 2_592_000_000)
        return rtf.format(Math.round(diffMs / 86_400_000), "day");
    if (absDiffMs < 31_536_000_000)
        return rtf.format(Math.round(diffMs / 2_592_000_000), "month");
    return rtf.format(Math.round(diffMs / 31_536_000_000), "year");
}
