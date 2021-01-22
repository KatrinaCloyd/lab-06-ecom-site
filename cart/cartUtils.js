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

export function setCart(cart) {
    const strCart = JSON.stringify(cart);
    localStorage.setItem(CART, strCart);
}

export function addToCart(id) {

    const cart = getCart();
    //check if item in cart already
    const item = findById(id, cart);
    //if so ++ quantity
    if (item) {
        item.quantity++;
    }
    //if not add item id and qty:1 
    else {
        const newCartItem = {
            id: id,
            quantity: 1
        };
        cart.push(newCartItem);
    }
    setCart(cart);
}
