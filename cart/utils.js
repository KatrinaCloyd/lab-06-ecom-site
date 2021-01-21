export function findById(number, array) {
    for (let item of array) {
        if (number === item.id) {
            return item;
        }
    }
}

export function calcItemTotal(quantity, priceEach) {
    let itemTotal = quantity * priceEach;
    return itemTotal;
}

export function calcOrderTotal(cartItems, animals) {
    let grandTotal = 0;
    for (let cartItem of cartItems) {
        const animal = findById(cartItem.id, animals);
        const itemTotal = calcItemTotal(cartItem.quantity, animal.price);
        grandTotal = grandTotal + itemTotal;
    }
    return grandTotal;
}