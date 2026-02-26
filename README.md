# temporal-fns

Date utility functions built on the JavaScript [Temporal API](https://tc39.es/proposal-temporal/).

Inspired by [date-fns](https://date-fns.org/), `temporal-fns` provides the same kind of convenient utility functions for working with dates and times — but built from the ground up on Temporal, giving you:

- **Precise timezone handling** — uses named IANA timezones, not just UTC/local
- **Calendar system support** — ISO 8601, Hebrew, Japanese, Buddhist, and more
- **Nanosecond precision** — not limited to milliseconds like `Date`
- **Immutable by design** — all functions return new values, never mutate
- **Type-safe polymorphism** — pass a `ZonedDateTime`, get a `ZonedDateTime` back (TypeScript overloads preserve the concrete type)
- **Testable** — injectable `ClockProvider` instead of global mutable state

## Requirements

`temporal-fns` itself has no runtime dependencies — it expects `Temporal` to be available globally. Native support is still rolling out:

| Environment | Status |
|---|---|
| Firefox 139+ | ✅ Native (May 2025) |
| Chrome 144+ | ✅ Native (January 2026) |
| Node.js (any) | ⚠️ Behind `--harmony-temporal` flag; no unflagged support yet |
| Bun | ❌ Not yet implemented ([open issue](https://github.com/oven-sh/bun/issues/15853)) |
| Safari | ❌ Not yet available natively |

**For everything except Firefox 139+ and Chrome 144+, you need a polyfill.** The recommended option is [`temporal-polyfill`](https://github.com/nicolo-ribaudo/tc39-proposal-temporal-polyfill):

```bash
pnpm add temporal-polyfill
# or
npm install temporal-polyfill
```

Then import it once at your app's entry point:

```typescript
import "temporal-polyfill/global";
```

Or, if you prefer the TC39 team's official polyfill:

```bash
pnpm add @js-temporal/polyfill
```

```typescript
import { Temporal } from "@js-temporal/polyfill";
// make it global if needed:
(globalThis as typeof globalThis & { Temporal: typeof Temporal }).Temporal = Temporal;
```

> **Temporal's proposal status:** Stage 3 as of early 2026. The spec is stable and the proposal is not expected to change significantly — it's in the implementation phase across runtimes.

## Installation

```bash
pnpm add temporal-fns temporal-polyfill
# or
npm install temporal-fns temporal-polyfill
```

## Key differences from date-fns

| Concern | date-fns | temporal-fns |
|---|---|---|
| Month indexing | 0=January (like `Date`) | **1=January** (ISO 8601) |
| Weekday indexing | 0=Sunday by default | **1=Monday** (ISO 8601) |
| Timezones | Clunky (date-fns-tz addon) | First-class (`ZonedDateTime`) |
| Precision | Milliseconds | **Nanoseconds** |
| Mutability | Returns new `Date` | Temporal types are immutable |
| "Now" in predicates | `new Date()` called internally | **Injectable `ClockProvider`** |
| Global state | `setDefaultOptions()` | **No global state** |

## Quick start

### addDays — type is preserved

```typescript
import { addDays } from "temporal-fns";

// PlainDate in -> PlainDate out
const d = Temporal.PlainDate.from("2025-01-15");
const next = addDays(d, 7); // Temporal.PlainDate: 2025-01-22

// ZonedDateTime in -> ZonedDateTime out (timezone preserved!)
const zdt = Temporal.ZonedDateTime.from("2025-01-15T09:00:00[America/New_York]");
const nextZdt = addDays(zdt, 7);
// -> 2025-01-22T09:00:00[America/New_York] (DST-aware!)
```

### startOfWeek — custom week start

```typescript
import { startOfWeek } from "temporal-fns";

const friday = Temporal.PlainDate.from("2025-01-17"); // Friday

// ISO: week starts Monday
startOfWeek(friday);                         // 2025-01-13 (Monday)
startOfWeek(friday, { weekStartsOn: 7 });   // 2025-01-12 (Sunday)
```

### isToday — testable with mock clock

```typescript
import { isToday } from "temporal-fns";
import type { ClockProvider } from "temporal-fns";

// Production
const zdt = Temporal.Now.zonedDateTimeISO("America/New_York");
isToday(zdt); // true

// Tests — inject a fixed clock
const mockClock: ClockProvider = {
  instant: () => Temporal.Instant.from("2025-06-15T12:00:00Z"),
  zonedDateTimeISO: (tz) => Temporal.ZonedDateTime.from(`2025-06-15T08:00:00[${tz ?? "UTC"}]`),
  plainDateISO: (tz) => Temporal.PlainDate.from("2025-06-15"),
  plainDateTimeISO: (tz) => Temporal.PlainDateTime.from("2025-06-15T08:00:00"),
  timeZoneId: () => "America/New_York",
};

const june15 = Temporal.ZonedDateTime.from("2025-06-15T10:00:00[America/New_York]");
isToday(june15, { clock: mockClock }); // true
```

### Working days

```typescript
import { addWorkingDays, differenceInWorkingDays } from "temporal-fns";

const friday = Temporal.PlainDate.from("2025-01-17");
addWorkingDays(friday, 3); // 2025-01-22 (Wed, skips weekend)

// Custom workweek (e.g. Mon-Thu + Sat)
addWorkingDays(friday, 1, { workingDays: [1, 2, 3, 4, 6] }); // 2025-01-18 (Saturday)
```

### formatLocale

```typescript
import { formatLocale } from "temporal-fns";

const zdt = Temporal.ZonedDateTime.from("2025-06-15T14:30:00[America/New_York]");
formatLocale(zdt, { dateStyle: "full", timeStyle: "short" }, "en-US");
// -> "Sunday, June 15, 2025 at 2:30 PM"
formatLocale(zdt, { dateStyle: "long" }, "de-DE");
// -> "15. Juni 2025"
```

## API

### Arithmetic

| Function | Description |
|---|---|
| `add(date, duration)` | Add a Duration or DurationLike |
| `addDays(date, n)` | Add n days |
| `addMonths(date, n)` | Add n months |
| `addYears(date, n)` | Add n years |
| `addWeeks(date, n)` | Add n weeks |
| `addHours(date, n)` | Add n hours |
| `addMinutes(date, n)` | Add n minutes |
| `addSeconds(date, n)` | Add n seconds |
| `addQuarters(date, n)` | Add n quarters |
| `addWorkingDays(date, n, options?)` | Add n working days |
| `sub(date, duration)` | Subtract a Duration or DurationLike |
| `subDays(date, n)` | Subtract n days |
| `subMonths(date, n)` | Subtract n months |
| `subYears(date, n)` | Subtract n years |
| `subWeeks(date, n)` | Subtract n weeks |
| `subHours(date, n)` | Subtract n hours |
| `subMinutes(date, n)` | Subtract n minutes |
| `subSeconds(date, n)` | Subtract n seconds |
| `subQuarters(date, n)` | Subtract n quarters |
| `subWorkingDays(date, n, options?)` | Subtract n working days |

### Comparison

| Function | Description |
|---|---|
| `compareAsc(a, b)` | Compare: -1, 0, or 1 |
| `compareDesc(a, b)` | Compare descending |
| `isEqual(a, b)` | Are dates equal? |
| `isBefore(a, b)` | Is a before b? |
| `isAfter(a, b)` | Is a after b? |
| `min(dates)` | Earliest date in array |
| `max(dates)` | Latest date in array |
| `closestTo(date, dates)` | Closest date in array |
| `closestIndexTo(date, dates)` | Index of closest date |

### Boundaries

| Function | Description |
|---|---|
| `startOfDay(date)` | Start of day (midnight) |
| `startOfWeek(date, options?)` | Start of week |
| `startOfMonth(date)` | Start of month |
| `startOfQuarter(date)` | Start of quarter |
| `startOfYear(date)` | Start of year |
| `startOfDecade(date)` | Start of decade |
| `startOfHour(date)` | Start of hour |
| `startOfMinute(date)` | Start of minute |
| `startOfSecond(date)` | Start of second |
| `endOfDay(date)` | End of day (23:59:59.999999999) |
| `endOfWeek(date, options?)` | End of week |
| `endOfMonth(date)` | End of month |
| `endOfQuarter(date)` | End of quarter |
| `endOfYear(date)` | End of year |
| `endOfDecade(date)` | End of decade |
| `endOfHour(date)` | End of hour |
| `endOfMinute(date)` | End of minute |
| `endOfSecond(date)` | End of second |

### Difference

| Function | Description |
|---|---|
| `differenceInDays(a, b)` | Full days between dates |
| `differenceInCalendarDays(a, b)` | Calendar days between dates |
| `differenceInMonths(a, b)` | Full months between dates |
| `differenceInCalendarMonths(a, b)` | Calendar months |
| `differenceInYears(a, b)` | Full years between dates |
| `differenceInCalendarYears(a, b)` | Calendar years |
| `differenceInWeeks(a, b)` | Full weeks between dates |
| `differenceInCalendarWeeks(a, b, options?)` | Calendar weeks |
| `differenceInHours(a, b)` | Full hours between datetimes |
| `differenceInMinutes(a, b)` | Full minutes |
| `differenceInSeconds(a, b)` | Full seconds |
| `differenceInMilliseconds(a, b)` | Milliseconds between instants |
| `differenceInQuarters(a, b)` | Full quarters |
| `differenceInCalendarQuarters(a, b)` | Calendar quarters |
| `differenceInWorkingDays(a, b, options?)` | Working days between dates |

### Getters

| Function | Description |
|---|---|
| `getYear(date)` | Year |
| `getMonth(date)` | Month (1-12) |
| `getDate(date)` | Day of month (1-31) |
| `getDay(date)` | Day of week (1=Mon, 7=Sun) |
| `getDayOfYear(date)` | Day of year (1-366) |
| `getDaysInMonth(date)` | Days in the month |
| `getDaysInYear(date)` | Days in the year |
| `getDecade(date)` | Decade (e.g. 2020) |
| `getQuarter(date)` | Quarter (1-4) |
| `getWeekOfYear(date)` | ISO week number |
| `getHours(date)` | Hour (0-23) |
| `getMinutes(date)` | Minute (0-59) |
| `getSeconds(date)` | Second (0-59) |
| `getMilliseconds(date)` | Millisecond (0-999) |
| `getEpochMilliseconds(date)` | Epoch milliseconds |
| `getEpochNanoseconds(date)` | Epoch nanoseconds (bigint) |

### Setters

| Function | Description |
|---|---|
| `setYear(date, year)` | Set the year |
| `setMonth(date, month)` | Set the month |
| `setDate(date, day)` | Set the day of month |
| `setDay(date, day, options?)` | Set the day of week |
| `setDayOfYear(date, day)` | Set the day of year |
| `setQuarter(date, quarter)` | Set the quarter |
| `setHours(date, hours)` | Set the hour |
| `setMinutes(date, minutes)` | Set the minute |
| `setSeconds(date, seconds)` | Set the second |
| `setMilliseconds(date, ms)` | Set the millisecond |

### Intervals

| Function | Description |
|---|---|
| `areIntervalsOverlapping(a, b, options?)` | Do intervals overlap? |
| `isWithinInterval(date, interval)` | Is date within interval? |
| `clamp(date, interval)` | Clamp date to interval |
| `intervalToDuration(interval)` | Convert interval to Duration |
| `eachDayOfInterval(interval)` | Array of each day |
| `eachWeekOfInterval(interval, options?)` | Array of each week start |
| `eachMonthOfInterval(interval)` | Array of each month start |
| `eachYearOfInterval(interval)` | Array of each year start |
| `eachWorkingDayOfInterval(interval, options?)` | Array of working days |

### Predicates

| Function | Description |
|---|---|
| `isLeapYear(date)` | Is it a leap year? |
| `isWeekend(date)` | Is it Saturday or Sunday? |
| `isMonday(date)` ... `isSunday(date)` | Day-of-week checks |
| `isFirstDayOfMonth(date)` | Is it the 1st? |
| `isLastDayOfMonth(date)` | Is it the last day? |
| `isToday(zdt, options?)` | Is it today? |
| `isTomorrow(zdt, options?)` | Is it tomorrow? |
| `isYesterday(zdt, options?)` | Is it yesterday? |
| `isFuture(instant, options?)` | Is it in the future? |
| `isPast(instant, options?)` | Is it in the past? |
| `isThisWeek(zdt, options?)` | Is it this week? |
| `isThisMonth(zdt, options?)` | Is it this month? |
| `isThisYear(zdt, options?)` | Is it this year? |
| `isWorkingDay(date, options?)` | Is it a working day? |
| `isValid(value)` | Is it any Temporal type? |

### Navigation

| Function | Description |
|---|---|
| `nextDay(date, day)` | Next occurrence of weekday |
| `previousDay(date, day)` | Previous occurrence |
| `nextMonday(date)` ... `nextSunday(date)` | Next specific weekday |
| `previousMonday(date)` ... `previousSunday(date)` | Previous specific weekday |

### Conversion

| Function | Description |
|---|---|
| `toZonedDateTime(pdt, tz, options?)` | PlainDateTime to ZonedDateTime |
| `toPlainDate(date)` | Strip time to PlainDate |
| `toPlainTime(date)` | Extract PlainTime |
| `toPlainDateTime(zdt)` | Strip timezone |
| `withTimeZone(zdt, tz)` | Change timezone |
| `withCalendar(date, calendar)` | Change calendar system |
| `fromEpochMilliseconds(ms)` | Instant from epoch ms |
| `fromEpochNanoseconds(ns)` | Instant from epoch ns |

### Type guards

| Function | Description |
|---|---|
| `isTemporalDate(value)` | Is PlainDate, PlainDateTime, or ZonedDateTime? |
| `isZonedDateTime(value)` | Is ZonedDateTime? |
| `isPlainDate(value)` | Is PlainDate? |
| `isPlainDateTime(value)` | Is PlainDateTime? |
| `isInstant(value)` | Is Instant? |

### Format and parse

| Function | Description |
|---|---|
| `formatISO(date)` | ISO 8601 string |
| `formatISODuration(duration)` | ISO 8601 duration string |
| `formatLocale(date, options?, locale?)` | Locale-aware formatting |
| `formatRelative(zdt, options?)` | Relative time ("2 days ago") |
| `formatDuration(duration, options?)` | Human-readable duration |
| `parseISO(string)` | Auto-detect and parse |
| `parseISODate(string)` | Parse to PlainDate |
| `parseISODateTime(string)` | Parse to PlainDateTime |
| `parseISOZoned(string)` | Parse to ZonedDateTime |
| `parseISOInstant(string)` | Parse to Instant |

## What was intentionally dropped from date-fns

- **`constructFrom`** — each Temporal type has its own `.from()` static method
- **`toDate`** — we are moving _away_ from `Date`, not toward it
- **`setDefaultOptions` / `getDefaultOptions`** — no global mutable state; pass options explicitly
- **`isDate`** — use `isTemporalDate()`, `isZonedDateTime()`, etc. instead
- **`transpose`** — Temporal handles calendar/timezone conversion natively

## License

MIT
