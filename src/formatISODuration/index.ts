/**
 * Returns the ISO 8601 duration string representation.
 *
 * @param duration - The Temporal.Duration to format
 * @returns The ISO 8601 duration string (e.g. "P1Y2M3DT4H")
 */
export function formatISODuration(duration: Temporal.Duration): string {
    return duration.toString();
}
