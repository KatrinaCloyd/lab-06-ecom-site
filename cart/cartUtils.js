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

const CART = 'CART';
const defaultEmptyCart = [];

export function getCart() {
    const strCart = localStorage.getItem(CART);
    if (strCart) {
        const prseCart = JSON.parse(strCart);
        return prseCart;
    }
    else {
        const strDefaultCart = JSON.stringify(defaultEmptyCart);
        localStorage.setItem(CART, strDefaultCart);
        return defaultEmptyCart;
    }
}

export function clearCart() {
    const strDefaultCart = JSON.stringify(defaultEmptyCart);
    localStorage.setItem(CART, strDefaultCart);
}

