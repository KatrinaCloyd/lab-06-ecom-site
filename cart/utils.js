export function findById(number, array) {
    for (let item of array) {
        if (number === item.id) {
            return item;
        }
    }
}