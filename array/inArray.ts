/**
 * InArray
 * Searches an array for the specified value
 *
 * Example:
 * ```typescript
 * import { inArray } from "./array/inArray";
 *
 * const array = ["foo", "bar"];
 * const a = "foo";
 * const b = "Bar";
 *
 * inArray(array, value); // true
 * inArray(array, b); // false
 * ```
 *
 * @param {any[]} array: Reference array
 * @param {any} element: Value to search
 * @return {boolean}
 */
export const inArray = (array: any[], element: any): boolean => {
  for (let i in array) {
    if (array[i] === element) return true
  }

  return false
}