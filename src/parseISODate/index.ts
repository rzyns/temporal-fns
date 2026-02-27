/**
 * Parses an ISO 8601 string specifically into a Temporal.PlainDate.
 *
 * @param s - The ISO 8601 date string to parse (e.g. "2024-06-15")
 * @returns The parsed PlainDate
 * @throws {RangeError} If the string cannot be parsed as a PlainDate
 */
export function parseISODate(s: string): Temporal.PlainDate {
    return Temporal.PlainDate.from(s);
}
