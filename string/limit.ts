/**
 * Limit
 * Limits the string to `n` character
 *
 * Example:
 * ```typescript
 * import { limit } from "./string/limit";
 *
 * const str = "Some str";
 *
 * limit(str, 4); // "Some"
 * ```
 *
 * @param {string} string: String to limit
 * @param {number} count: Count to limit string character size
 * @return {string}
 */
export const limit = (string: string, count: number): string => string.substring(0, count);