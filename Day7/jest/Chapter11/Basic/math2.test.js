// math.test.js

const { calculator } = require("./math2");

test("calculator.subtract 함수 모킹 테스트", () => {
  // 여기에 코드 작성
  // 1. calculator.subtract가 1을 반환하도록 jest.fn()으로 모킹하세요
  calculator.subtract = jest.fn().mockReturnValue(1);

  // 2. 모킹된 함수를 호출하고, 호출 여부를 검증하세요.
  //    -> subtract 함수에는 5와 3을 인자로 전달하세요.
  calculator.subtract(5, 3);
  expect(calculator.subtract).toHaveBeenCalled();

  // 3. calculator.subtract 함수가 1을 반환하는지 검증하세요.
  //    -> 5 - 3은 2지만 모킹으로 인해 1이 반환됩니다.
  expect(calculator.subtract(5, 3)).toBe(1);
});
