export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
function divide(a, b) {
  if (b === 0) return null;
  return a / b;
}
export { divide };
