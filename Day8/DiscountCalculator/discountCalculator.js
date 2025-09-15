const calculatePrice = (price, membership = "regular", coupon = null) => {
  const priceAfterPriceDiscount = priceDiscounter(price);

  // 2. 회원 등급에 따라 추가 할인 적용
  const priceAfterMembershipDiscount = membershipDiscounter(
    priceAfterPriceDiscount,
    membership
  );

  const priceAfterCouponDiscount = couponDiscounter(
    priceAfterMembershipDiscount,
    coupon
  );
  // 4. 최소 가격 제한 적용
  const finalPrice = minimumPriceLimiter(priceAfterCouponDiscount, price);
  // 5. 최종 가격 반환
  return finalPrice;
};

const priceDiscounter = (price) => {
  //상품 가격에 따른 금액 할인
  if (price < 50000) {
  } else if (50000 <= price && price < 100000) {
    price *= 0.95;
  } else if (100000 <= price && price < 200000) {
    price *= 0.9;
  } else if (200000 <= price) {
    price *= 0.8;
  }
  return price;
};

const membershipDiscounter = (price, membership) => {
  if (membership === "regular") {
  } else if (membership === "silver") {
    price *= 0.98;
  } else if (membership === "gold") {
    price *= 0.95;
  } else if (membership === "vip") {
    price *= 0.9;
  }

  return price;
};

const couponDiscounter = (price, coupon) => {
  if (!coupon) return price; // 쿠폰이 없으면 할인 없음
  if (coupon.type === "percentage") {
    return price * (1 - coupon.amount / 100); // 비율 쿠폰 적용
  }
  if (coupon.type === "fixed") {
    return price - coupon.amount; // 정액 쿠폰 적용
  }
  return price; // 잘못된 쿠폰 타입은 할인 없음
};

const minimumPriceLimiter = (discountedPrice, originalPrice) => {
  return Math.max(discountedPrice, originalPrice * 0.5); // 최소 가격 할인 적용
}

module.exports = { calculatePrice };
