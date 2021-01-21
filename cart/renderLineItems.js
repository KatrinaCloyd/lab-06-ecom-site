import { calcItemTotal } from './utils.js';

export function renderLineItems(item, animal) {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = animal.name;

    const tdSpecies = document.createElement('td');
    tdSpecies.textContent = animal.species;

    const tdMag = document.createElement('td');
    if (animal.magical) {
        tdMag.textContent = `Yes`;
    }
    else { tdMag.textContent = `No`; }

    const tdQty = document.createElement('td');
    tdQty.textContent = item.quantity;

    const tdTotal = document.createElement('td');
    tdTotal.textContent = `$${calcItemTotal(item.quantity, animal.price)}`;

    tr.append(tdName, tdSpecies, tdMag, tdQty, tdTotal);

    return tr;
}