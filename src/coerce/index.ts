import { parseISO } from "../parseISO/index.js";
import type { AnyTemporalDate, TemporalInput } from "../types.js";

interface CoerceOptions {
    timeZone: string;
}

/**
 * Coerce any reasonable temporal input into the most appropriate Temporal type.
 * Without a timeZone option, returns the most specific type possible.
 */
export function coerce(
    input: TemporalInput,
): AnyTemporalDate | Temporal.Instant | Temporal.PlainTime;

/**
 * Coerce any reasonable temporal input into a ZonedDateTime in the given timezone.
 */
export function coerce(
    input: TemporalInput,
    options: CoerceOptions,
): Temporal.ZonedDateTime;

export function coerce(
    input: TemporalInput,
    options?: CoerceOptions,
): AnyTemporalDate | Temporal.Instant | Temporal.PlainTime {
    const tz = options?.timeZone;
    const value = resolve(input);

    if (tz === undefined) {
        return value;
    }

    if (value instanceof Temporal.PlainTime) {
        throw new TypeError(
            "Cannot convert PlainTime to ZonedDateTime: no date component",
        );
    }

    if (value instanceof Temporal.Instant) {
        return value.toZonedDateTimeISO(tz);
    }

    if (value instanceof Temporal.ZonedDateTime) {
        return value.withTimeZone(tz);
    }

    if (value instanceof Temporal.PlainDateTime) {
        return value.toZonedDateTime(tz);
    }

    // PlainDate
    return value.toZonedDateTime({
        timeZone: tz,
        plainTime: Temporal.PlainTime.from("00:00:00"),
    });
}

function resolve(
    input: TemporalInput,
): AnyTemporalDate | Temporal.Instant | Temporal.PlainTime {
    if (typeof input === "string") {
        return parseISO(input);
    }

    if (typeof input === "number") {
        return Temporal.Instant.fromEpochMilliseconds(input);
    }

    if (input instanceof Date) {
        return Temporal.Instant.fromEpochMilliseconds(input.getTime());
    }

    // Already a Temporal type — passthrough
    return input;
}
