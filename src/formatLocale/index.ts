type FormattableDate =
  | Temporal.ZonedDateTime
  | Temporal.PlainDate
  | Temporal.PlainDateTime;

/**
 * Formats a Temporal date using Intl.DateTimeFormat via toLocaleString.
 *
 * @param date - The Temporal date to format
 * @param options - Intl.DateTimeFormat options
 * @param locale - The locale(s) to use for formatting
 * @returns The locale-formatted string
 */
export function formatLocale(
  date: FormattableDate,
  options?: Intl.DateTimeFormatOptions,
  locale?: string | string[],
): string {
  return date.toLocaleString(locale, options);
}
