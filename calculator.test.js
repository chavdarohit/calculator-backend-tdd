import { add, subtract, multiply, divide } from "./calculator.js";

describe("Calculator", () => {
  it("It should be true for Jest setup checks", () => {
    expect(true).toBe(true);
  });
  test("should add two numbers correctly", () => {
    expect(add(1, 2)).toBe(3);
  });
  test("should subtract two numbers correctly", () => {
    expect(subtract(5, 3)).toBe(2);
  });
  test("should multiply two numbers correctly", () => {
    expect(multiply(2, 3)).toBe(6);
  });
  test("should return null when dividing by zero", () => {
    expect(divide(10, 0)).toBeNull();
  });
});
