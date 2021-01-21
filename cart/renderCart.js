import { cartItems } from './cartData.js';
import { animals } from '../products/data.js';

import { findById, calcOrderTotal } from '../cart/utils.js';
import { renderLineItems } from '../cart/renderLineItems.js';

const table = document.getElementById('shoppingCart');

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

td4.textContent = `Order total: $${grandTotal}`;

tr.append(td1, td2, td3, td4);

table.append(tr);