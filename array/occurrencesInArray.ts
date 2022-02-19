/**
 * OccurrencesInArray
 * Searches an array for all the occurrences of the specified value
 *
 * Example:
 * ```typescript
 * import { occurrencesInArray } from "./array/occurrencesInArray";
 *
 * const array = ["foo", "bar", "foo"];
 * const a = "foo";
 * const b = "bar";
 *
 * occurrencesInArray(array, a); // 2
 * occurrencesInArray(array, b); // 1
 * ```
 *
 * @param {any[]} array: Reference array
 * @param {any} value: Value to search
 * @return {number}
 */
export const occurrencesInArray = (array: any[], value: any): number => array.reduce((a, v) => (v === value ? a + 1 : a), 0);