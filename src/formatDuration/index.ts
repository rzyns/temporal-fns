/**
 * Formats a Temporal.Duration as a human-readable string
 * (e.g. "1 year, 2 months, 3 days").
 *
 * @param duration - The duration to format
 * @param options - Optional locale and style (currently unused, reserved for future Intl support)
 * @returns A human-readable duration string
 */
export function formatDuration(
  duration: Temporal.Duration,
  options?: { locale?: string; style?: "long" | "short" | "narrow" },
): string {
  const parts: string[] = [];
  if (duration.years !== 0)
    parts.push(
      `${duration.years} year${Math.abs(duration.years) !== 1 ? "s" : ""}`,
    );
  if (duration.months !== 0)
    parts.push(
      `${duration.months} month${Math.abs(duration.months) !== 1 ? "s" : ""}`,
    );
  if (duration.weeks !== 0)
    parts.push(
      `${duration.weeks} week${Math.abs(duration.weeks) !== 1 ? "s" : ""}`,
    );
  if (duration.days !== 0)
    parts.push(
      `${duration.days} day${Math.abs(duration.days) !== 1 ? "s" : ""}`,
    );
  if (duration.hours !== 0)
    parts.push(
      `${duration.hours} hour${Math.abs(duration.hours) !== 1 ? "s" : ""}`,
    );
  if (duration.minutes !== 0)
    parts.push(
      `${duration.minutes} minute${Math.abs(duration.minutes) !== 1 ? "s" : ""}`,
    );
  if (duration.seconds !== 0)
    parts.push(
      `${duration.seconds} second${Math.abs(duration.seconds) !== 1 ? "s" : ""}`,
    );
  return parts.join(", ") || "0 seconds";
}
