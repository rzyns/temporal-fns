export function toPlainDateTime(
    date: Temporal.ZonedDateTime,
): Temporal.PlainDateTime {
    return date.toPlainDateTime();
}
