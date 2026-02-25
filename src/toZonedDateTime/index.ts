export function toZonedDateTime(
  date: Temporal.PlainDateTime,
  timeZone: string,
  options?: { disambiguation?: "compatible" | "earlier" | "later" | "reject" },
): Temporal.ZonedDateTime {
  return date.toZonedDateTime(timeZone, {
    disambiguation: options?.disambiguation ?? "compatible",
  });
}
