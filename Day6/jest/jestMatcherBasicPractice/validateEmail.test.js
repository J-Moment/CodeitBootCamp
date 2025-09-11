const {validateEmail} = require("./validateEmail");

test("이메일이 유효할 경우 - true를 반환하는지 확인", () => {
    expect(validateEmail("dsw03002@naver.com")).toBeTruthy();
});

test("이메일이 유효하지 않을 경우 - false를 반환하는지 확인", () => {
    expect(validateEmail("dsw03002naver.com")).toBeFalsy();
});

test("도메인 없이 이메일을 허용하지 않아야 함", () => {
    expect(validateEmail("dsw03002@.com")).not.toBeTruthy();
});