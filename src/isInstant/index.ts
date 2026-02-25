export function isInstant(value: unknown): value is Temporal.Instant {
  return value instanceof Temporal.Instant;
}
