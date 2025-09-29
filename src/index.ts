/**
 * Flip - Simple Error Handling Library
 */

export namespace Flip {
  export type R<T, E> =
    | { readonly ok: true; readonly value: T }
    | { readonly ok: false; readonly error: E };

  export const ok = <T>(value: T): R<T, never> => ({ ok: true, value });
  export const err = <E>(error: E): R<never, E> => ({ ok: false, error });

  export const v = <T, E>(res: R<T, E>): T => {
    if (res.ok) {
      return res.value;
    }
    throw new Error("Tried to get value from an error result");
  };

  export const e = <T, E>(res: R<T, E>): E => {
    if (!res.ok) {
      return res.error;
    }
    throw new Error("Tried to get error from an ok result");
  };

  export function isOk<T, E>(
    res: R<T, E>
  ): res is { readonly ok: true; readonly value: T };
  export function isOk<T, E>(res: Promise<R<T, E>>): Promise<boolean>;
  export function isOk<T, E>(
    res: R<T, E> | Promise<R<T, E>>
  ): boolean | Promise<boolean> {
    if (res instanceof Promise) {
      return res.then((r) => r.ok);
    }
    return res.ok;
  }

  export function isErr<T, E>(
    res: R<T, E>
  ): res is { readonly ok: false; readonly error: E };
  export function isErr<T, E>(res: Promise<R<T, E>>): Promise<boolean>;
  export function isErr<T, E>(
    res: R<T, E> | Promise<R<T, E>>
  ): boolean | Promise<boolean> {
    if (res instanceof Promise) {
      return res.then((r) => !r.ok);
    }
    return !res.ok;
  }
}
