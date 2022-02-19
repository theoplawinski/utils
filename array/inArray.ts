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
 * inArray(array, a); // true
 * inArray(array, b); // false
 * ```
 *
 * @param {any[]} array: Reference array
 * @param {any} value: Value to search
 * @return {boolean}
 */
export const inArray = (array: any[], value: any): boolean => {
  for (let i in array) {
    if (array[i] === value) return true
  }

  return false
}