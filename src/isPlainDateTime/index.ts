export function isPlainDateTime(
  value: unknown,
): value is Temporal.PlainDateTime {
  return value instanceof Temporal.PlainDateTime;
}
