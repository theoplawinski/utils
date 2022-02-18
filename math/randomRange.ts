/**
 * RandomRange
 * Returns a random number between the specified values
 *
 * Example:
 * ```typescript
 * import { rand } from "./math/randomRange";
 *
 * randomRange(25, 100); // Output between 25-100
 * ```
 *
 * @param {number} min: Lower bound
 * @param {number} max: Upper bound
 * @return {number}
 */
export const randomRange = (min: number, max: number): number => Math.random() * (max - min) + min;