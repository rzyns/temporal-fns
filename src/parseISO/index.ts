/**
 * Parses an ISO 8601 string into the most appropriate Temporal type.
 * Tries each type in order from most specific to least specific.
 *
 * @param s - The ISO 8601 string to parse
 * @returns The parsed Temporal value
 * @throws {RangeError} If the string cannot be parsed as any Temporal type
 */
export function parseISO(
    s: string,
):
    | Temporal.ZonedDateTime
    | Temporal.PlainDateTime
    | Temporal.PlainDate
    | Temporal.PlainTime
    | Temporal.Instant {
    // Try each type in order from most to least specific
    if (s.includes("[") && s.includes("]")) {
        try {
            return Temporal.ZonedDateTime.from(s);
        } catch {
            /* continue */
        }
    }
    if (s.endsWith("Z") || /[+-]\d{2}:\d{2}$/.test(s)) {
        try {
            return Temporal.Instant.from(s);
        } catch {
            /* continue */
        }
    }
    if (s.includes("T")) {
        try {
            return Temporal.PlainDateTime.from(s);
        } catch {
            /* continue */
        }
    }
    if (/^\d{4}-\d{2}-\d{2}$/.test(s)) {
        try {
            return Temporal.PlainDate.from(s);
        } catch {
            /* continue */
        }
    }
    try {
        return Temporal.PlainTime.from(s);
    } catch {
        /* continue */
    }

    throw new RangeError(`Could not parse "${s}" as any Temporal type`);
}
