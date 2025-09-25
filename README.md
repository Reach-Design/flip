# Flip 

A TypeScript library that makes error handling less painful than stepping on a LEGO barefoot.

![Gemini_Generated_Image_rvc8fnrvc8fnrvc8 (1)](https://github.com/user-attachments/assets/a88cb327-0e3e-4ae9-baa4-dae6cc4740b2)

## Installation

```bash
npm install @reachdesign/flip
```

## Why Flip?

Because nobody likes `try-catch` blocks that look like a pyramid scheme. Instead of throwing tantrums (I mean exceptions), functions return a `Flip.R<E, T>` that's either "Yay, it worked!" or "Oops, something went sideways."

## Usage

### Coffee Check ☕

```typescript
import { Flip } from '@reachdesign/flip';

function needsCoffee(cups: number): Flip.R<string, string> {
  if (cups < 2) return Flip.err("Zombie mode activated!");
  return Flip.ok("Human mode unlocked ✨");
}

const result = needsCoffee(1);
console.log(Flip.isOk(result) ? Flip.v(result) : Flip.e(result));
// "Zombie mode activated 🧟‍♂️"
```


### WiFi Mood 📶

```typescript
async function connectWifi(password: string): Promise<Flip.R<string, string>> {
  if (password === "password123") return Flip.err("Seriously? 🤦‍♂️");
  await new Promise(resolve => setTimeout(resolve, 100)); // "connecting"
  return Flip.ok("Internet magic activated! ✨");
}

const connection = await connectWifi("password123");
// Result: "Seriously? 🤦‍♂️"
```

## API Reference

### Types

- `Flip.R<E, T>`: A result type that's either `{ ok: true, value: T }` (success) or `{ ok: false, error: E }` (error)

### Functions

- `Flip.ok<T>(value: T)`: Creates a successful result (like finding money in your old jeans)
- `Flip.err<E>(error: E)`: Creates an error result (like realizing it was just a receipt)
- `Flip.v<E, T>(result: Flip.R<E, T>)`: Extracts the value from success (throws if error - handle with care!)
- `Flip.e<E, T>(result: Flip.R<E, T>)`: Extracts the error from failure (throws if success - also handle with care!)
- `Flip.isOk<E, T>(result: Flip.R<E, T>)`: Checks if result is successful (type-safe way to check)
- `Flip.isErr<E, T>(result: Flip.R<E, T>)`: Checks if result is an error (for when things go sideways)
- `Flip.isOk<E, T>(result: Promise<Flip.R<E, T>>)`: Async version for promise results
- `Flip.isErr<E, T>(result: Promise<Flip.R<E, T>>)`: Async version for promise results

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
