/**
 * UseIsHandheldDevice
 * Detects if it's a handheld device
 *
 * Example:
 * ```typescript
 * import { useIsHandheldDevice } from "./functions/useIsHandheldDevice";
 *
 * useIsHandheldDevice() // true or false
 * ```
 *
 * @return {boolean}
 */
export const useIsHandheldDevice = /(tablet|ipad|playbook|silk)|(android(?!.*mobi))|Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(navigator.userAgent);