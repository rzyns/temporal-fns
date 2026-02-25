/**
 * Parses an ISO 8601 string specifically into a Temporal.ZonedDateTime.
 *
 * @param s - The ISO 8601 zoned datetime string to parse
 *   (e.g. "2024-06-15T10:30:00[America/New_York]")
 * @returns The parsed ZonedDateTime
 * @throws {RangeError} If the string cannot be parsed as a ZonedDateTime
 */
export function parseISOZoned(s: string): Temporal.ZonedDateTime {
  return Temporal.ZonedDateTime.from(s);
}
