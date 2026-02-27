/**
 * Type-level tests for temporal-fns.
 *
 * This folder (`_typeTests/`) contains compile-time type assertions using
 * vitest's `expectTypeOf`. These files use the `.test-d.ts` extension and
 * verify that function signatures infer the correct types — they are NOT
 * executed at runtime.
 */
import { expectTypeOf, test } from "vitest";
import { add } from "../add/index.js";
import { formatISO } from "../formatISO/index.js";
import { pipe } from "../pipe/index.js";

test("pipe(zdt, add) infers Temporal.ZonedDateTime", () => {
    const zdt = Temporal.ZonedDateTime.from(
        "2024-06-15T10:00:00[America/New_York]",
    );
    const result = pipe(zdt, (d) => add(d, { days: 1 }));
    expectTypeOf(result).toEqualTypeOf<Temporal.ZonedDateTime>();
});

test("pipe(plainDate, add) infers Temporal.PlainDate", () => {
    const pd = Temporal.PlainDate.from("2024-06-15");
    const result = pipe(pd, (d) => add(d, { days: 1 }));
    expectTypeOf(result).toEqualTypeOf<Temporal.PlainDate>();
});

test("pipe(zdt, add, formatISO) infers string", () => {
    const zdt = Temporal.ZonedDateTime.from(
        "2024-06-15T10:00:00[America/New_York]",
    );
    const result = pipe(
        zdt,
        (d) => add(d, { days: 1 }),
        (d) => formatISO(d),
    );
    expectTypeOf(result).toEqualTypeOf<string>();
});

test("pipe(x) identity returns the same type", () => {
    const zdt = Temporal.ZonedDateTime.from(
        "2024-06-15T10:00:00[America/New_York]",
    );
    const result = pipe(zdt);
    expectTypeOf(result).toEqualTypeOf<Temporal.ZonedDateTime>();
});

test("mismatched step types produce a TypeScript error", () => {
    const num = 42;
    // @ts-expect-error - second function expects string but receives number
    pipe(num, (x: string) => x.toUpperCase());
});
