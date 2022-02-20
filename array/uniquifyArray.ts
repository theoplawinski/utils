/**
 * UniquifyArray
 * Removes occurrences from the specified array
 *
 * Example:
 * ```typescript
 * import { uniquifyArray } from "./array/uniquifyArray";
 *
 * const array = ["foo", "bar", "foo"];
 *
 * uniquifyArray(array); // ["foo", "bar"]
 * ```
 *
 * @param {any[]} array: Reference array
 * @return {any[]}
 */
export const uniquifyArray = (array: any[]): any[] => [...new Set(array)];