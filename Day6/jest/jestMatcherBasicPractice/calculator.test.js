const {calculateDiscountedPrice} = require("./calculator");

test("할인율이 20%일 때 올바른 결과를 반환하는지 확인", () => {
  expect(calculateDiscountedPrice(1000, 20)).toBe(800);
});

test("유효한 가격일 때, 할인 적용 후 0보다 큰 숫자를 반환 하는지 확인", () => {
  expect(calculateDiscountedPrice(5000, 50)).toBeGreaterThan(0);
});

test("기본 가격이 할인 적용 후 기본 가격보다 적은지 확인", () => {
  expect(calculateDiscountedPrice(3000, 30)).toBeLessThan(3000);
});

test("음수 할인율과 같은 유효하지 않은 할인율에 대하여 에러를 던지는지 확인", () => {
    expect(() => {
        calculateDiscountedPrice(1000, -10);
    }).toThrow("입력값이 유효하지 않습니다. 가격과 할인율은 0 이상이어야 하며, 할인율은 100 이하이어야 합니다.");
});