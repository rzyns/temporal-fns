/**
 * Checks if the given value is a valid Temporal type.
 */
export function isValid(value: unknown): boolean {
    return (
        value instanceof Temporal.PlainDate ||
        value instanceof Temporal.PlainDateTime ||
        value instanceof Temporal.ZonedDateTime ||
        value instanceof Temporal.Instant ||
        value instanceof Temporal.PlainTime ||
        value instanceof Temporal.PlainYearMonth ||
        value instanceof Temporal.PlainMonthDay
    );
}
