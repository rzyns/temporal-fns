/**
 * Parses an ISO 8601 string specifically into a Temporal.Instant.
 *
 * @param s - The ISO 8601 instant string to parse (e.g. "2024-06-15T10:30:00Z")
 * @returns The parsed Instant
 * @throws {RangeError} If the string cannot be parsed as an Instant
 */
export function parseISOInstant(s: string): Temporal.Instant {
  return Temporal.Instant.from(s);
}
