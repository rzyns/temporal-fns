export function withTimeZone(
    date: Temporal.ZonedDateTime,
    timeZone: string,
): Temporal.ZonedDateTime {
    return date.withTimeZone(timeZone);
}
