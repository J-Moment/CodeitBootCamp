const Cart = require("./cart");

describe("장바구니 기능 테스트", () => {
  test("상품을 장바구니에 추가할 수 있어야 한다.", () => {
    const cart = new Cart();

    cart.addItem({
      id: "item1",
      name: "노트북",
      price: 1000000,
      quantity: 1,
    });

    expect(cart.items).toHaveLength(1);
    expect(cart.items[0]).toEqual({
      id: "item1",
      name: "노트북",
      price: 1000000,
      quantity: 1,
    });
  });

  test("같은 상품을 추가하면 수량이 증가해야 함", () => {
    const cart = new Cart();

    cart.addItem({
      id: "item1",
      name: "노트북",
      price: 1000000,
      quantity: 1,
    });

    cart.addItem({
      id: "item1",
      name: "노트북",
      price: 1000000,
      quantity: 1,
    });

    expect(cart.items).toHaveLength(1);
    expect(cart.items[0].quantity).toBe(2);
  });

  test("상품을 장바구니에서 제거할 수 있어야 함", () => {
    const cart = new Cart();

    cart.addItem({
      id: "item1",
      name: "노트북",
      price: 1000000,
      quantity: 1,
    });
    cart.addItem({
      id: "item2",
      name: "마우스",
      price: 30000,
      quantity: 1,
    });

    cart.removeItem("item1");

    expect(cart.items).toHaveLength(1);
    expect(cart.items[0]).toEqual({
      id: "item2",
      name: "마우스",
      price: 30000,
      quantity: 1,
    });
  });

  test("상품의 수량을 변경할 수 있어야 함", () => {
    const cart = new Cart();

    cart.addItem({
        id: "item1",
      name: "노트북",
      price: 1000000,
      quantity: 1,
    });

    cart.updateQuantity("item1", 3);

    expect(cart.items[0].quantity).toBe(3);
  });

  test("상품의 수량은 1보다 작으면 안된다", () => {
    const cart = new Cart();

    cart.addItem({
        id: "item1",
      name: "노트북",
      price: 1000000,
      quantity: 1,
    })

    expect(() => {
        cart.updateQuantity("item1", 0);
    }).toThrow("수량은 1보다 작을 수 없습니다.");
  })

  test("존재하지 않는 상품은 수량을 변결 할 수 없다", () => {
    const cart = new Cart();

    cart.addItem({
        id: "item1",
        name: "노트북",
        price: 1000000,
        quantity: 1,
    });

    expect(() => {
        cart.updateQuantity("item2", 3);
    }).toThrow("존재하지 않는 상품입니다.");
  });
});
