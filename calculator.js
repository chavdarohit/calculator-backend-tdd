export const add = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Invalid input it must be a number");
  }
  return a + b;
};
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => (b === 0 ? null : a / b);
