export type Operation = (
  a: number,
  b: number
) => number | 'Cannot divide by zero';

export const add: Operation = (a, b) => {
  return a + b;
};
export const subtract: Operation = (a, b) => {
  return a - b;
};
export const multiply: Operation = (a, b) => {
  return a * b;
};

export const divide: Operation = (a, b) => {
  if (b === 0) {
    return 'Cannot divide by zero';
  }
  return a / b;
};
