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
  test("should give an error when passed the string in add function", () => {
    expect(() => add(1, "a")).toThrow("Invalid input it must be a number");
  });
  test("should throw an error when given null as an argument", () => {
    expect(() => add(5, null)).toThrow("Invalid input it must be a number");
  });

  test("should throw an error when given an object", () => {
    expect(() =>
      add(5, {
        b: 1
      })
    ).toThrow("Invalid input it must be a number");
  });
  test("should return the correct division result", () => {
    expect(divide(10, 2)).toBe(5);
  });
});
