/**
 * Type-level tests for Temporal.Instant support in comparison/ordering functions.
 */
import { expectTypeOf, test } from "vitest";
import { clamp } from "../clamp/index.js";
import { compareAsc } from "../compareAsc/index.js";
import { differenceInMilliseconds } from "../differenceInMilliseconds/index.js";
import { isAfter } from "../isAfter/index.js";
import { isBefore } from "../isBefore/index.js";
import { isEqual } from "../isEqual/index.js";
import { max } from "../max/index.js";
import { min } from "../min/index.js";

test("compareAsc(instant, instant) infers -1 | 0 | 1", () => {
    const a = Temporal.Instant.from("2024-01-15T12:00:00Z");
    const b = Temporal.Instant.from("2024-06-20T12:00:00Z");
    expectTypeOf(compareAsc(a, b)).toEqualTypeOf<-1 | 0 | 1>();
});

test("compareAsc(instant, zdt) infers -1 | 0 | 1", () => {
    const instant = Temporal.Instant.from("2024-01-15T12:00:00Z");
    const zdt = Temporal.ZonedDateTime.from("2024-01-15T12:00:00[UTC]");
    expectTypeOf(compareAsc(instant, zdt)).toEqualTypeOf<-1 | 0 | 1>();
});

test("isAfter(instant, instant) infers boolean", () => {
    const a = Temporal.Instant.from("2024-01-15T12:00:00Z");
    const b = Temporal.Instant.from("2024-06-20T12:00:00Z");
    expectTypeOf(isAfter(a, b)).toEqualTypeOf<boolean>();
});

test("isBefore(instant, zdt) infers boolean", () => {
    const instant = Temporal.Instant.from("2024-01-15T12:00:00Z");
    const zdt = Temporal.ZonedDateTime.from("2024-01-15T12:00:00[UTC]");
    expectTypeOf(isBefore(instant, zdt)).toEqualTypeOf<boolean>();
});

test("isEqual(instant, instant) infers boolean", () => {
    const a = Temporal.Instant.from("2024-01-15T12:00:00Z");
    const b = Temporal.Instant.from("2024-01-15T12:00:00Z");
    expectTypeOf(isEqual(a, b)).toEqualTypeOf<boolean>();
});

test("differenceInMilliseconds(instant, instant) infers number", () => {
    const a = Temporal.Instant.from("2024-01-15T12:00:00Z");
    const b = Temporal.Instant.from("2024-06-20T12:00:00Z");
    expectTypeOf(differenceInMilliseconds(a, b)).toEqualTypeOf<number>();
});

test("clamp(instant, { start, end }) infers Temporal.Instant", () => {
    const date = Temporal.Instant.from("2024-01-15T12:00:00Z");
    const start = Temporal.Instant.from("2024-01-01T00:00:00Z");
    const end = Temporal.Instant.from("2024-01-31T23:59:59Z");
    expectTypeOf(clamp(date, { start, end })).toEqualTypeOf<Temporal.Instant>();
});

test("min([instant, instant]) infers Temporal.Instant", () => {
    const a = Temporal.Instant.from("2024-01-15T12:00:00Z");
    const b = Temporal.Instant.from("2024-06-20T12:00:00Z");
    expectTypeOf(min([a, b])).toEqualTypeOf<Temporal.Instant>();
});

test("max([instant, instant]) infers Temporal.Instant", () => {
    const a = Temporal.Instant.from("2024-01-15T12:00:00Z");
    const b = Temporal.Instant.from("2024-06-20T12:00:00Z");
    expectTypeOf(max([a, b])).toEqualTypeOf<Temporal.Instant>();
});
