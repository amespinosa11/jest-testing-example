const Calculator = require("./calculator");
describe("Calculator", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(Calculator.add(1, 2)).toEqual(3);
  });

  test("subtract 2 - 1 to equal 1", () => {
    expect(Calculator.subtract(2, 1)).toEqual(1);
  });

  test("multiply 2 * 2 to equal 4", () => {
    expect(Calculator.multiply(2, 2)).toEqual(4);
  });

  test("divide 4 / 2 to equal 2", () => {
    expect(Calculator.divide(4, 2)).toEqual(2);
  });
});
