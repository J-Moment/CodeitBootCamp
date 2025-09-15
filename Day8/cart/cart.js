class Cart {
  constructor() {
    this.items = [];
  };

  addItem(item) {
    const existingItem = this.items.find((i) => i.id === item.id);

    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.items.push(item);
    };
  };

  removeItem(itemId) {
    this.items = this.items.filter((item) => item.id !== itemId);
  };

  updateQuantity(itemId, quantity) {
    if (quantity < 1) {
      throw new Error("수량은 1보다 작을 수 없습니다.");
    };

    const item = this.items.find((i) => i.id === itemId);

    if (!item) {
      throw new Error("존재하지 않는 상품입니다.");
    };

    item.quantity = quantity;
  };
}

module.exports = Cart;
