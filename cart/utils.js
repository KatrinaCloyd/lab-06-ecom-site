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