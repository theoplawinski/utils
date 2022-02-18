/**
 * RandomBool
 * Returns true or false
 *
 * Example:
 * ```typescript
 * import { randomBool } from "./math/randomBool";
 *
 * randomBool(); // true or false
 * ```
 *
 * @return {boolean}
 */
export const randomBool = (): boolean => Math.random() > 0.5;