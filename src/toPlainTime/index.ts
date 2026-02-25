export function toPlainTime(
  date: Temporal.ZonedDateTime | Temporal.PlainDateTime,
): Temporal.PlainTime {
  return date.toPlainTime();
}
