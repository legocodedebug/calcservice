const { sum, sub, mul } = require("./app.js");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 3 - 1 to equal 2", () => {
  expect(sub(3, 1)).toBe(2);
});

test("mul 3 * 2 to equal 6", () => {
  expect(mul(3, 2)).toBe(6);
});
