export type ValidationStrategy = (num: number) => boolean;

export const isInteger = (num: unknown): boolean =>
  Number.isInteger(Number(num));
export const numberLowerThan100: ValidationStrategy = (num) => num < 100;
export const numberGreaterThan0: ValidationStrategy = (num) => num > 0;
export const numberIsEven: ValidationStrategy = (num) => num % 2 === 0;
