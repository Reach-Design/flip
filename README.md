# Flip 

A TypeScript library that makes error handling less painful than stepping on a LEGO barefoot.

![Reach Design Flip](https://github.com/user-attachments/assets/a88cb327-0e3e-4ae9-baa4-dae6cc4740b2)

![npm version](https://img.shields.io/npm/v/@reachdesign/flip?style=for-the-badge&logo=npm&color=red)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## Installation

```bash
npm install @reachdesign/flip
```

## Skill

This repository includes a reusable skill for Reach Design Flip at [`skills/reachdesign-flip-error-handling`](skills/reachdesign-flip-error-handling).

Install it in the current workspace with:

```bash
npx skills add Reach-Design/flip --skill reachdesign-flip-error-handling
```

The skill provides guidance for explicit Flip error handling, including reading successful values with `Flip.v(...)` and errors with `Flip.e(...)`.


## Why Flip?

Because nobody likes `try-catch` blocks that look like a pyramid scheme. Instead of throwing tantrums (I mean exceptions), functions return a `Flip.R<T, E>` that's either "Yay, it worked!" or "Oops, something went sideways."

## Usage
```typescript
import { Flip } from '@reachdesign/flip';

function countSlices(pizzas: number): Flip.R<number, string> {
  if (pizzas === 0) return Flip.err("No pizza, no life! 😭");
  return Flip.ok(pizzas * 8);
}

const result = countSlices(0);
console.log(Flip.isErr(result) ? Flip.e(result) : Flip.v(result));
// "No pizza, no life! 😭"
```

### Cat Mood 😸

```typescript
function checkCat(treats: number): Flip.R<boolean, string> {
  if (treats < 3) return Flip.err("Cat is plotting revenge 😾");
  return Flip.ok(true);
}

const result = checkCat(2);
console.log(Flip.isOk(result) ? "Happy cat!" : Flip.e(result));
// "Cat is plotting revenge 😾"
```

### Async Coffee ☕

```typescript
async function brewCoffee(beans: number): Promise<Flip.R<string, Error>> {
  if (beans === 0) return Flip.err(new Error("Zombie mode ON 🧟‍♂️"));
  return Flip.ok("☕ Ready!");
}

const result = await brewCoffee(0);
console.log(Flip.isOk(result) ? Flip.v(result) : Flip.e(result).message);
// "Zombie mode ON 🧟‍♂️"

```

## API Reference

### Types

- `Flip.R<T, E>`: A result type that's either `{ ok: true, value: T }` (success) or `{ ok: false, error: E }` (error)

### Functions

- `Flip.ok<T>(value: T)`: Creates a successful result (like finding money in your old jeans)
- `Flip.err<E>(error: E)`: Creates an error result (like realizing it was just a receipt)
- `Flip.v<T, E>(result: Flip.R<T, E>)`: Extracts the value from success (throws if error - handle with care!)
- `Flip.e<T, E>(result: Flip.R<T, E>)`: Extracts the error from failure (throws if success - also handle with care!)
- `Flip.isOk<T, E>(result: Flip.R<T, E>)`: Checks if result is successful (type-safe way to check)
- `Flip.isErr<T, E>(result: Flip.R<T, E>)`: Checks if result is an error (for when things go sideways)
- `Flip.isOk<T, E>(result: Promise<Flip.R<T, E>>)`: Async version for promise results
- `Flip.isErr<T, E>(result: Promise<Flip.R<T, E>>)`: Async version for promise results

## Benefits

- 🚫 **No more exceptions**: Handle errors like a responsible adult
- 🔒 **Type-safe**: TypeScript will hold your hand and guide you
- 🎯 **Explicit**: No surprises, no hidden exceptions jumping out
- 📦 **Lightweight**: Smaller than your morning coffee
- 🧪 **Testable**: Testing error scenarios is now fun (or at least bearable)

## Why "Flip"?

Because sometimes your code works, sometimes it doesn't - it's like flipping a coin, but now you can handle both outcomes gracefully! 🪙

## License

MIT - Use it, abuse it, just don't blame us if your cat still gives you the death stare.

## Contributing

Found a bug? Have a funny example? PRs welcome! Just remember: with great power comes great responsibility to write good error messages.
