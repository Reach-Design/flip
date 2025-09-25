/**
 * Flip - Simple Error Handling Library
 */

export namespace Flip {
  export type R<E, T> =
    | { readonly ok: true; readonly value: T }
    | { readonly ok: false; readonly error: E };

  export const ok = <T>(value: T): R<never, T> => ({ ok: true, value });
  export const err = <E>(error: E): R<E, never> => ({ ok: false, error });

  export const v = <E, T>(res: R<E, T>): T => {
    if (res.ok) {
      return res.value;
    }
    throw new Error("Tried to get value from an error result");
  };

  export const e = <E, T>(res: R<E, T>): E => {
    if (!res.ok) {
      return res.error;
    }
    throw new Error("Tried to get error from an ok result");
  };

  export function isOk<E, T>(
    res: R<E, T>
  ): res is { readonly ok: true; readonly value: T };
  export function isOk<E, T>(res: Promise<R<E, T>>): Promise<boolean>;
  export function isOk<E, T>(
    res: R<E, T> | Promise<R<E, T>>
  ): boolean | Promise<boolean> {
    if (res instanceof Promise) {
      return res.then((r) => r.ok);
    }
    return res.ok;
  }

  export function isErr<E, T>(
    res: R<E, T>
  ): res is { readonly ok: false; readonly error: E };
  export function isErr<E, T>(res: Promise<R<E, T>>): Promise<boolean>;
  export function isErr<E, T>(
    res: R<E, T> | Promise<R<E, T>>
  ): boolean | Promise<boolean> {
    if (res instanceof Promise) {
      return res.then((r) => !r.ok);
    }
    return !res.ok;
  }
}

export default Flip;
