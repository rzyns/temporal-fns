/**
 * Parses an ISO 8601 string specifically into a Temporal.PlainDateTime.
 *
 * @param s - The ISO 8601 datetime string to parse (e.g. "2024-06-15T10:30:00")
 * @returns The parsed PlainDateTime
 * @throws {RangeError} If the string cannot be parsed as a PlainDateTime
 */
export function parseISODateTime(s: string): Temporal.PlainDateTime {
    return Temporal.PlainDateTime.from(s);
}
