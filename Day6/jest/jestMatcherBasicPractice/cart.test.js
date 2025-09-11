const {filterCartItems} = require("./cart");

test("노트북을 필터링 했을 때, 올바른 결과를 반환하는지 확인", () => {
  const cart = [
    { name: "노트북", price: 1000 },
    { name: "마우스", price: 50 },
    { name: "노트북", price: 1200 },
  ];
  const result = filterCartItems(cart, "노트북");
  expect(result).toContain(cart[0]);
});

test("휴대폰을 필터링 했을 때, 노트북이 존재하지 않는지 확인", () => {
    const cart = [
        { name: "노트북", price: 1000 },
        { name: "마우스", price: 50 },
        { name: "휴대폰", price: 1200 },
    ];
    const result = filterCartItems(cart, "휴대폰");
    expect(result).not.toContain(cart[0]);
});

test("마우스를 필터링 했을 때, 정확한 아이템 객체를 반환하는지 확인", () => {
    const cart =[
        { name: "노트북", price: 1000 },
        { name: "마우스", price: 50 },
        { name: "휴대폰", price: 1200 },
    ];
    const result = filterCartItems(cart, "마우스");
    expect(result).toEqual([{ name: "마우스", price: 50 }]
    )
})