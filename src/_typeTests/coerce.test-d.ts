/**
 * Type-level tests for coerce().
 *
 * Verifies that function overloads resolve to the correct return types
 * based on the presence or absence of the timeZone option.
 */
import { expectTypeOf, test } from "vitest";
import { coerce } from "../coerce/index.js";
import type { AnyTemporalDate } from "../types.js";

test("coerce(string) infers union return type", () => {
    const result = coerce("2024-06-15");
    expectTypeOf(result).toEqualTypeOf<
        AnyTemporalDate | Temporal.Instant | Temporal.PlainTime
    >();
});

test("coerce(string, { timeZone }) infers ZonedDateTime", () => {
    const result = coerce("2024-06-15", { timeZone: "UTC" });
    expectTypeOf(result).toEqualTypeOf<Temporal.ZonedDateTime>();
});

test("coerce(number) infers union return type", () => {
    const result = coerce(1718448600000);
    expectTypeOf(result).toEqualTypeOf<
        AnyTemporalDate | Temporal.Instant | Temporal.PlainTime
    >();
});

test("coerce(number, { timeZone }) infers ZonedDateTime", () => {
    const result = coerce(1718448600000, { timeZone: "UTC" });
    expectTypeOf(result).toEqualTypeOf<Temporal.ZonedDateTime>();
});

test("coerce(Date) infers union return type", () => {
    const result = coerce(new Date());
    expectTypeOf(result).toEqualTypeOf<
        AnyTemporalDate | Temporal.Instant | Temporal.PlainTime
    >();
});

test("coerce(Date, { timeZone }) infers ZonedDateTime", () => {
    const result = coerce(new Date(), { timeZone: "UTC" });
    expectTypeOf(result).toEqualTypeOf<Temporal.ZonedDateTime>();
});

test("coerce(Instant) infers union return type", () => {
    const instant = Temporal.Instant.from("2024-06-15T10:30:00Z");
    const result = coerce(instant);
    expectTypeOf(result).toEqualTypeOf<
        AnyTemporalDate | Temporal.Instant | Temporal.PlainTime
    >();
});

test("coerce(Instant, { timeZone }) infers ZonedDateTime", () => {
    const instant = Temporal.Instant.from("2024-06-15T10:30:00Z");
    const result = coerce(instant, { timeZone: "UTC" });
    expectTypeOf(result).toEqualTypeOf<Temporal.ZonedDateTime>();
});
