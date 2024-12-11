let order1 = {
    orderDate: new Date(),
    shippingMethod: 'Standard',
    deliveryDays: {
        Standard: 5,
        Express: 2,
        Overnight: 1
    }
};

function calculateDeliveryDate(order) {
    let deliveryDate = new Date(order.orderDate);
    let deliveryDays = order.deliveryDays[order.shippingMethod];
    deliveryDate.setDate(deliveryDate.getDate() + deliveryDays);
    return deliveryDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
}

console.log('Estimated Delivery Date:', calculateDeliveryDate(order1));
