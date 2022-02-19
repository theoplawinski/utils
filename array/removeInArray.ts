/**
 * RemoveInArray
 * Removes an item from the array. Removes all its references if multi is set to `true`
 *
 * Example:
 * ```typescript
 * import { removeInArray } from "./array/removeInArray";
 *
 * const array = [1, 2, 3, 1, 2, 3];
 *
 * removeInArray(array, 2); // [1, 3, 1, 2, 3]
 * removeInArray(array, 2, true); // [1, 3, 1, 3]
 * ```
 *
 * @param {any[]} array: Reference array
 * @param {any} value: Item to remove
 * @param {boolean} multi: Set true to remove all item references
 * @return {any[]}
 */
export const removeInArray = (array: any[], value: any, multi = false): any[] => {
  let index = array.indexOf(value);

  if (index < 0) return [...array]

  do {
    array = [...array.slice(0, index), ...array.slice(index + 1)];
    index = array.indexOf(value);
  } while (multi && index > -1)

  return array
}