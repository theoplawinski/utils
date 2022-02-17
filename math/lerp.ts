/**
 * Lerp
 * Returns the value between two numbers at a specified, decimal midpoint
 *
 * Example:
 * ```typescript
 * import { lerp } from "./math/lerp";
 *
 * lerp(20, 80, 0)   // 20
 * lerp(20, 80, 1)   // 80
 * lerp(20, 80, 0.5) // 40
 * ```
 *
 * @param {number} x: First value
 * @param {number} y: Second value
 * @param {number} a: Alpha
 * @return {number}
 */
export const lerp = (x: number, y: number, a: number): number => x * (1 - a) + y * a;