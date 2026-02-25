export function toPlainDate(
  date: Temporal.ZonedDateTime | Temporal.PlainDateTime,
): Temporal.PlainDate {
  return date.toPlainDate();
}
