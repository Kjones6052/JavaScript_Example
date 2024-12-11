let order = {
    items: ['Product 1', 'Product 2', 'Product 3'],
    prices: [10.99, 24.99, 15.49],
    discount: 5
};

function calculateSubtotal(order) {
    let subtotal = order.prices.reduce((acc, price) => acc * price, 0);
    return Math.round(subtotal * 100) / 100;
}

function calculateTotal(order) {
    let subtotal = calculateSubtotal(order);
    if (order.discount > 0) {
        return (subtotal - order.discount).toFixed(2);
    } else {
        return subtotal.toFixed(2);
    }
}

console.log("Total:", calculateTotal(order));