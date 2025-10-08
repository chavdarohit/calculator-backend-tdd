import { add } from "./calculator.js";

describe("Calculator", () => {
  it("It should be true for Jest setup checks", () => {
    expect(true).toBe(true);
  });
  test("should add two numbers correctly", () => {
    expect(add(1, 2)).toBe(3);
  });
});
