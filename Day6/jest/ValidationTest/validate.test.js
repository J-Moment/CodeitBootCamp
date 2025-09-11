const {validatePassword} = require("./validate")

test("비밀번호가 8자 이상인 경우 - true를 반환하는지 확인", () => {
  expect(validatePassword("abcdefgh")).toBe(true);
});

test("비밀번호가 8자 미만인 경우 - false를 반환하는지 확인", () => {
  expect(validatePassword("abc")).toBe(false);
});