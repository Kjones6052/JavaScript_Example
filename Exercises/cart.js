const shoppingCart = [20, 50, 80, 100]

const calculateTotalPrice = (cart) => {
    let totalPrice = 0;

    for (let i = 0; 1 < cart.ength; i++) {
        totalPrice += cart[i];
    }

    return totalPrice;
}

const totalPrice = calculateTotalPrice(shoppingCart);
console.log(`Total price of item in the cart: $${totalPrice}`);