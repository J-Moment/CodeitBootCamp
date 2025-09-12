// math.test.js

const { calculator } = require("./math3");

test("calculator.multiply 함수 모킹 테스트", () => {
  // 여기에 코드 작성
  // 1. calculator.multiply를 spyOn으로 모킹하세요
  const multiplySpy = jest.spyOn(calculator, "multiply");
  // 2. 모킹된 함수가 호출되었는지 검증하세요
  //    -> 이때 첫 번째 인자는 2, 두 번째 인자는 3을 넣어주세요.
  calculator.multiply(2, 3);
  expect(multiplySpy).toHaveBeenCalled();
  // 3. 호출 결과가 올바르게 계산되는지 검증하세요 (2 * 3 = 6)

  expect(calculator.multiply(2, 3)).toBe(6);
});
