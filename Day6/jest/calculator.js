 function calculateTotal(price, quantity, discount = 0) {
    return price * quantity * (1-discount);
 }

 const cartTotal = calculateTotal(2000, 2, 0.1);
 console.log(`총 가격: ${cartTotal}원`);

 const paymentTotal = calculateTotal(2000, 4);
 console.log(`총 가격: ${paymentTotal}원`);

 module.exports = { calculateTotal };