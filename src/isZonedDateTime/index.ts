export function isZonedDateTime(
    value: unknown,
): value is Temporal.ZonedDateTime {
    return value instanceof Temporal.ZonedDateTime;
}
