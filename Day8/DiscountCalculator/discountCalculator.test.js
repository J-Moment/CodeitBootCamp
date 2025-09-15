const { calculatePrice } = require("./discountCalculator");

describe("가격 할인 계산기", () => {
  describe("상품 가격에 따른 금액 할인", () => {
    test("5만원 미만일 경우 할인이 적용되면 안된다.", () => {
      const price = 10000;
      const result = calculatePrice(price);

      expect(result).toBe(10000);
    });

    test("5만원 이상일 경우 5% 할인이 적용되어야 한다.", () => {
      const price = 50000;
      const result = calculatePrice(price);

      expect(result).toBe(47500);
    });

    test("10만원 이상일 경우 10% 할인이 적용되어야 한다.", () => {
      const price = 100000;
      const result = calculatePrice(price);

      expect(result).toBe(90000);
    });

    test("20만원 이상일 경우 20% 할인이 적용되어야 한다.", () => {
      const price = 200000;
      const result = calculatePrice(price);

      expect(result).toBe(160000);
    });
  });

  describe("회원 등급에 따른 추가 할인", () => {
    test("일반 회원일 경우 추가 할인이 없어야 한다.", () => {
      const price = 10000;
      const membership = "regular";
      const result = calculatePrice(price, membership);

      expect(result).toBe(10000);
    });
    test("실버 회원일 경우 추가 2% 할인이 되어야 한다.", () => {
      const price = 50000;
      const membership = "silver";
      const result = calculatePrice(price, membership);

      expect(result).toBe(46550);
    });
    test("골드 회원일 경우 추가 5% 할인이 되어야 한다.", () => {
      const price = 100000;
      const membership = "gold";
      const result = calculatePrice(price, membership);

      expect(result).toBe(85500);
    });
    test("VIP 회원일 경우 추가 10% 할인이 되어야 한다.", () => {
      const price = 200000;
      const membership = "vip";
      const result = calculatePrice(price, membership);

      expect(result).toBe(144000);
    });
  });

  describe("쿠폰 할인 적용 테스트", () => {
    test("정액 쿠폰 적용 시 쿠폰에 따라 할인이 적용되어야 함", () => {
      const price = 100000;
      const membership = "regular";
      const coupon = {
        type: "fixed",
        amount: 5000, // 1만원 쿠폰
      };

      const finalPrice = calculatePrice(price, membership, coupon);
      expect(finalPrice).toBe(85000); // 100,000 * 0.9 - 5,000
    });

    test("비율 쿠폰 적용 시 쿠폰에 따라 할인이 적용되어야 함", () => {
      const price = 100000;
      const membership = "regular";
      const coupon = {
        type: "percentage",
        amount: 10, // 10% 쿠폰
      };

      const finalPrice = calculatePrice(price, membership, coupon);
      expect(finalPrice).toBe(81000); // 100,000 * 0.9 * 0.9
    });
  });

  describe("최대 할인(50%) 제한 테스트", () => {
    test("최대 할인율이 50%를 초과하지 않도록 테스트", () => {
      const price = 100000; // 10% 할인
      const membership = "vip"; // 10% 추가 할인
      const coupon = {
        type: "percentage",
        amount: 50, // 50% 추가 할인
      };

      const finalPrice = calculatePrice(price, membership, coupon);
      expect(finalPrice).toBe(50000); // 최대 할인 적용 후 50,000
    });
  });
});
