export const arrayEquals = (a: any[], b: any[]): boolean => a.length === b.length && a.every((value, i) => value === b[i]);