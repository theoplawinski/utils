/**
 * Rand
 * Returns a random number between the specified values
 *
 * Example:
 * ```typescript
 * import { rand } from "./math/rand";
 *
 * rand(0, 100); // Output between 0-100
 * ```
 *
 * @param {number} min: Lower bound
 * @param {number} max: Upper bound
 * @return {number}
 */
export const rand = (min: number, max: number): number => Math.random() * (max - min) + min;