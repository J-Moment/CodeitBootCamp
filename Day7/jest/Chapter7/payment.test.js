// payment.test.js
const { fetchData } = require("./apiClient");

describe("apiClient.js 테스트", () => {
  let callback;

  beforeEach(() => {
    // 각 테스트 전에 callback을 jest.fn()으로 초기화
    callback = jest.fn();

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({
        id: 1,
        name: "김철수",
        address: {
          street: "테스트 거리",
          suite: "테스트 호수",
          city: "서울",
        },
      }),
    });
  });
  test("API 호출 후 데이터 포맷이 올바르게 되는지 확인", async () => {
    const url = "https://api.example/users/1";

    const result = await fetchData(url);

    expect(result).toEqual({
      userId: 1,
      formattedName: "김철수",
      address: "테스트 거리 테스트 호수 서울",
    });
  });

  test("callback 함수가 제공되면 호출되는지 확인", async () => {
    const url = "https://api.example/users/1";

    await fetchData(url, callback);

    expect(callback).toHaveBeenCalled();
  });

  test("callback 함수가 포멧된 데이터를 인자로 가지고 호출되는지 확인", async () => {
    const url = "https://api.example/users/1";

    await fetchData(url, callback);

    expect(callback).toHaveBeenCalledWith({
      userId: 1,
      formattedName: "김철수".toUpperCase(),
      address: "테스트 거리 테스트 호수 서울",
    });
  });

  test("callback 함수가 한 번 호출 되는지 확인", async () => {
    const url = "https://api.example/users/1";

    await fetchData(url, callback);

    expect(callback).toHaveBeenCalledTimes(1);
  });

  test("callback이 제공되지 않은 경우 callback 함수가 호출되지 않는지 확인", async () => {
    // Arrange
    const url = "https://api.example.com/user/1";

    // Act
    // callback 함수 전달 X
    await fetchData(url);

    // Assert
    // 0번 호출되었는지 확인
    expect(callback).toHaveBeenCalledTimes(0);
    // 또는 호출이 되지 않았는지 확인
    expect(callback).not.toHaveBeenCalled();
  });
});
