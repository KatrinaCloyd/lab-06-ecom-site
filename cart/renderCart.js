import { cartItems } from './cartData.js';
import { animals } from '../products/data.js';

import { findById, calcItemTotal } from '../cart/utils.js';
import { renderLineItems } from '../cart/renderLineItems.js';

const table = document.getElementById('shoppingCart');

for (let item of cartItems) {
    const newTableRow = renderLineItems(item, findById(item.id, animals));

    table.append(newTableRow);

}