/**
 * Any Temporal type that carries a calendar date (year/month/day).
 * These are the types most date-fns operations make sense on.
 */
export type AnyTemporalDate =
  | Temporal.PlainDate
  | Temporal.PlainDateTime
  | Temporal.ZonedDateTime;

/**
 * Any Temporal type that carries both a date and a time component.
 */
export type AnyTemporalDateTime =
  | Temporal.PlainDateTime
  | Temporal.ZonedDateTime;

/**
 * Any Temporal type that can represent an exact instant in history.
 */
export type AnyTemporalInstant = Temporal.Instant | Temporal.ZonedDateTime;

/**
 * Any Temporal type that carries a time component.
 */
export type AnyTemporalTime =
  | Temporal.PlainTime
  | Temporal.PlainDateTime
  | Temporal.ZonedDateTime;

/**
 * A half-open or closed interval between two Temporal date values of the same type.
 * start must be <= end.
 */
export interface TemporalInterval<T extends AnyTemporalDate = AnyTemporalDate> {
  start: T;
  end: T;
}

/**
 * A provider for "the current time", used to make time-relative functions testable.
 * The default implementation delegates to Temporal.Now.
 */
export interface ClockProvider {
  instant(): Temporal.Instant;
  zonedDateTimeISO(tzId?: string): Temporal.ZonedDateTime;
  plainDateISO(tzId?: string): Temporal.PlainDate;
  plainDateTimeISO(tzId?: string): Temporal.PlainDateTime;
  timeZoneId(): string;
}

/**
 * Default ClockProvider backed by Temporal.Now.
 */
export const systemClock: ClockProvider = {
  instant: () => Temporal.Now.instant(),
  zonedDateTimeISO: (tzId) => Temporal.Now.zonedDateTimeISO(tzId),
  plainDateISO: (tzId) => Temporal.Now.plainDateISO(tzId),
  plainDateTimeISO: (tzId) => Temporal.Now.plainDateTimeISO(tzId),
  timeZoneId: () => Temporal.Now.timeZoneId(),
};

/**
 * Options accepted by functions that need to know "now" (isToday, isThisWeek, etc.).
 */
export interface NowOptions {
  /** Override the clock for testing. Defaults to systemClock. */
  clock?: ClockProvider;
}

/**
 * Options for week-relative functions (startOfWeek, endOfWeek, etc.).
 */
export interface WeekOptions {
  /**
   * The day considered to be the first day of the week.
   * 1 = Monday, 7 = Sunday (ISO 8601 numbering).
   * Defaults to 1 (Monday).
   */
  weekStartsOn?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
}

/**
 * Options for working-day functions (addWorkingDays, differenceInWorkingDays).
 */
export interface WorkingDayOptions {
  /**
   * ISO 8601 day numbers (1=Mon, 7=Sun) that are considered working days.
   * Defaults to [1, 2, 3, 4, 5] (Monday-Friday).
   */
  workingDays?: ReadonlyArray<1 | 2 | 3 | 4 | 5 | 6 | 7>;
}

/** Branded type for day-of-week numbers (1=Mon ... 7=Sun, ISO 8601) */
export type DayOfWeek = 1 | 2 | 3 | 4 | 5 | 6 | 7;
