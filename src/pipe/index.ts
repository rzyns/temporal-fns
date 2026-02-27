export function pipe<A>(value: A): A;
export function pipe<A, B>(value: A, f1: (a: A) => B): B;
export function pipe<A, B, C>(value: A, f1: (a: A) => B, f2: (b: B) => C): C;
export function pipe<A, B, C, D>(
    value: A,
    f1: (a: A) => B,
    f2: (b: B) => C,
    f3: (c: C) => D,
): D;
export function pipe<A, B, C, D, E>(
    value: A,
    f1: (a: A) => B,
    f2: (b: B) => C,
    f3: (c: C) => D,
    f4: (d: D) => E,
): E;
export function pipe<A, B, C, D, E, F>(
    value: A,
    f1: (a: A) => B,
    f2: (b: B) => C,
    f3: (c: C) => D,
    f4: (d: D) => E,
    f5: (e: E) => F,
): F;
export function pipe<A, B, C, D, E, F, G>(
    value: A,
    f1: (a: A) => B,
    f2: (b: B) => C,
    f3: (c: C) => D,
    f4: (d: D) => E,
    f5: (e: E) => F,
    f6: (f: F) => G,
): G;
export function pipe<A, B, C, D, E, F, G, H>(
    value: A,
    f1: (a: A) => B,
    f2: (b: B) => C,
    f3: (c: C) => D,
    f4: (d: D) => E,
    f5: (e: E) => F,
    f6: (f: F) => G,
    f7: (g: G) => H,
): H;
export function pipe<A, B, C, D, E, F, G, H, I>(
    value: A,
    f1: (a: A) => B,
    f2: (b: B) => C,
    f3: (c: C) => D,
    f4: (d: D) => E,
    f5: (e: E) => F,
    f6: (f: F) => G,
    f7: (g: G) => H,
    f8: (h: H) => I,
): I;
export function pipe<A, B, C, D, E, F, G, H, I, J>(
    value: A,
    f1: (a: A) => B,
    f2: (b: B) => C,
    f3: (c: C) => D,
    f4: (d: D) => E,
    f5: (e: E) => F,
    f6: (f: F) => G,
    f7: (g: G) => H,
    f8: (h: H) => I,
    f9: (i: I) => J,
): J;
export function pipe(
    value: unknown,
    ...fns: Array<(x: unknown) => unknown>
): unknown {
    return fns.reduce((acc, fn) => fn(acc), value);
}
