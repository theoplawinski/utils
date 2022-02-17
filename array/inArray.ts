export const inArray = (array: any[], element: any): boolean => {
  for (let i in array) {
    if (array[i] === element) return true
  }

  return false
}