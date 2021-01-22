import { animals } from '../products/data.js';
import { getCart, clearCart } from './cartUtils.js';

import { findById, calcOrderTotal } from '../cart/cartUtils.js';
import { renderLineItems } from '../cart/renderLineItems.js';

const table = document.getElementById('shoppingCart');
const cartItems = getCart();

console.log(cartItems);

for (let item of cartItems) {
    const newTableRow = renderLineItems(item, findById(item.id, animals));
    table.append(newTableRow);
}

const grandTotal = calcOrderTotal(cartItems, animals);

const tr = document.createElement('tr');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');
const td4 = document.createElement('td');
const td5 = document.createElement('td');
td5.classList.add('grandTot');
td5.textContent = `Order total: $${grandTotal}`;

tr.append(td1, td2, td3, td4, td5);

table.append(tr);

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', () => {
    clearCart();
    location.reload();
});

const orderBtn = document.getElementById('order');
const clearBtn = document.getElementById('reset');
if (cartItems.length !== 0) {
    orderBtn.style.visibility = 'visible';
    clearBtn.style.visibility = 'visible';
}
orderBtn.addEventListener('click', () => {
    const cart = getCart();
    alert(`Thank you so much for your fantastical order. Your order is listed here in a terrible awful way that you will never be able to make sense of.` + JSON.stringify(cart));
    clearCart();
    location.href = '../index.html';
});