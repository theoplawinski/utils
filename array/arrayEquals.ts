/**
 * ArrayEquals
 * Checks if the arrays are equal
 *
 * Example:
 * ```typescript
 * import { arrayEquals } from "./array/arrayEquals";
 *
 * const a = ["foo", "bar"];
 * const b = ["foo"];
 * const c = ["foo", "bar"];
 *
 * arrayEquals(a, b); // false
 * arrayEquals(a, c); // true
 * ```
 *
 * @param {any[]} a: First array to compare
 * @param {any[]} b: Second array to compare
 * @return {boolean}
 */
export const arrayEquals = (a: any[], b: any[]): boolean => a.length === b.length && a.every((value, i) => value === b[i]);