import { calcItemTotal } from './utils.js';

export function renderLineItems(item, animal) {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = animal.name;

    const tdSpecies = document.createElement('td');
    tdSpecies.textContent = animal.species;

    const tdQty = document.createElement('td');
    tdQty.textContent = item.quantity;

    const tdTotal = document.createElement('td');
    tdTotal.textContent = `$${calcItemTotal(item.quantity, animal.price)}`;

    tr.append(tdName, tdSpecies, tdQty, tdTotal);

    return tr;
}