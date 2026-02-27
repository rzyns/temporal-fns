export function toTimeZone(
    date: Temporal.Instant,
    timeZone: string,
): Temporal.ZonedDateTime;
export function toTimeZone(
    date: Temporal.ZonedDateTime,
    timeZone: string,
): Temporal.ZonedDateTime;
export function toTimeZone(
    date: Temporal.PlainDateTime,
    timeZone: string,
    options?: {
        disambiguation?: "compatible" | "earlier" | "later" | "reject";
    },
): Temporal.ZonedDateTime;
export function toTimeZone(
    date: Temporal.Instant | Temporal.ZonedDateTime,
    timeZone: string,
): Temporal.ZonedDateTime;
export function toTimeZone(
    date: Temporal.Instant | Temporal.ZonedDateTime | Temporal.PlainDateTime,
    timeZone: string,
    options?: {
        disambiguation?: "compatible" | "earlier" | "later" | "reject";
    },
): Temporal.ZonedDateTime {
    if (date instanceof Temporal.Instant) {
        return date.toZonedDateTimeISO(timeZone);
    }
    if (date instanceof Temporal.ZonedDateTime) {
        return date.withTimeZone(timeZone);
    }
    return date.toZonedDateTime(timeZone, {
        disambiguation: options?.disambiguation ?? "compatible",
    });
}
