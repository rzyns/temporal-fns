/**
 * Type-level tests for toTimeZone() and toLocal().
 */
import { expectTypeOf, test } from "vitest";
import { toLocal } from "../toLocal/index.js";
import { toTimeZone } from "../toTimeZone/index.js";

test("toTimeZone(instant, tz) infers Temporal.ZonedDateTime", () => {
    const instant = Temporal.Instant.from("2025-06-15T12:00:00Z");
    expectTypeOf(
        toTimeZone(instant, "UTC"),
    ).toEqualTypeOf<Temporal.ZonedDateTime>();
});

test("toTimeZone(zdt, tz) infers Temporal.ZonedDateTime", () => {
    const zdt = Temporal.ZonedDateTime.from("2025-06-15T12:00:00[UTC]");
    expectTypeOf(
        toTimeZone(zdt, "UTC"),
    ).toEqualTypeOf<Temporal.ZonedDateTime>();
});

test("toTimeZone(plainDateTime, tz) infers Temporal.ZonedDateTime", () => {
    const pdt = Temporal.PlainDateTime.from("2025-06-15T12:00:00");
    expectTypeOf(
        toTimeZone(pdt, "UTC"),
    ).toEqualTypeOf<Temporal.ZonedDateTime>();
});

test("toLocal(instant) infers Temporal.ZonedDateTime", () => {
    const instant = Temporal.Instant.from("2025-06-15T12:00:00Z");
    expectTypeOf(toLocal(instant)).toEqualTypeOf<Temporal.ZonedDateTime>();
});

test("toLocal(zdt) infers Temporal.ZonedDateTime", () => {
    const zdt = Temporal.ZonedDateTime.from("2025-06-15T12:00:00[UTC]");
    expectTypeOf(toLocal(zdt)).toEqualTypeOf<Temporal.ZonedDateTime>();
});

test("toTimeZone rejects PlainDate", () => {
    const pd = Temporal.PlainDate.from("2025-06-15");
    // @ts-expect-error PlainDate has no time component
    toTimeZone(pd, "UTC");
});
