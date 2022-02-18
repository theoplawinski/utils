/**
 * RandomTo
 * Returns a random number between 0 and the specified value, excluded
 *
 * Example:
 * ```typescript
 * import { randomTo } from "./math/randomTo";
 *
 * randomTo(25); // Output between 0-24
 * ```
 *
 * @param {number} max: Upper bound
 * @return {number}
 */
export const randomTo = (max: number): number => Math.floor(Math.random() * max);