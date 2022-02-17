/**
 * Clamp
 * Clamps a value between the specified lower and upper bound
 *
 * Example:
 * ```typescript
 * import { clamp } from "./math/clamp";
 *
 * clamp(24, 20, 30) // 24
 * clamp(12, 20, 30) // 20
 * clamp(32, 20, 30) // 30
 * ```
 *
 * @param {number} a: Number to clamp
 * @param {number} min: Lower bound
 * @param {number} max: Upper bound
 * @return {number}
 */
export const clamp = (a: number, min: number, max: number): number => Math.min(max, Math.max(min, a));