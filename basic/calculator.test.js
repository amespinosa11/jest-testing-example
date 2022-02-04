const Calculator = require("./calculator"); // Arrange section

test("adds 1 + 2 to equal 3", () => {
  const result = Calculator.add(1, 2); // Act section
  expect(result).toEqual(3); // Assert section
});

// https://jestjs.io/docs/using-matchers
