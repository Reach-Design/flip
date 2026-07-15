---
name: reachdesign-flip-error-handling
description: Use Reach Design Flip for typed Result-based error handling in TypeScript.
---

## Important: Always Extract Values with `Flip.v(...)` and Errors with `Flip.e(...)`

When using Reach Design Flip, **never read result values directly with `.value` or `.error`**.

Always use:

```ts id="tkad0q"
Flip.v(result);
```

to read the success value.

Always use:

```ts id="zsa2va"
Flip.e(result);
```

to read the error value.

### Correct

```ts id="mksfmu"
const result = countSlices(2);

if (Flip.isOk(result)) {
  const slices = Flip.v(result);
  console.log(slices);
}

if (Flip.isErr(result)) {
  const error = Flip.e(result);
  console.log(error);
}
```

### Incorrect

```ts id="mdax1o"
const result = countSlices(2);

if (Flip.isOk(result)) {
  console.log(result.value); // Do not use direct .value access
}

if (Flip.isErr(result)) {
  console.log(result.error); // Do not use direct .error access
}
```

### Rule

Even though the internal shape of a Flip result is:

```ts id="jzjfex"
{
  ok: true;
  value: T;
}
```

or:

```ts id="ug11j5"
{
  ok: false;
  error: E;
}
```

the assistant must treat direct `.value` and `.error` access as forbidden in examples, reviews, and refactors.

Use this pattern instead:

```ts id="0lrke3"
Flip.isOk(result) ? Flip.v(result) : Flip.e(result);
```
