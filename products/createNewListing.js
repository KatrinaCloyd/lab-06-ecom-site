import { addToCart } from '../cart/cartUtils.js';

export function newAnimalListing(animal) {
    const li = document.createElement('li');
    li.classList.add('listItem');

    const h3 = document.createElement('h3');
    h3.classList.add('name');
    h3.textContent = `Name: ${animal.name}`;
    li.append(h3);

    const pSpecies = document.createElement('p');
    pSpecies.classList.add('species');
    pSpecies.textContent = `Species: ${animal.species}`;
    li.append(pSpecies);

    const img = document.createElement('img');
    img.src = animal.image;
    li.append(img);

    const pPrice = document.createElement('p');
    pPrice.classList.add('price');
    pPrice.textContent = `Price: $${animal.price}`;
    li.append(pPrice);

    const pNotes = document.createElement('p');
    pNotes.classList.add('notes');
    pNotes.textContent = `Special Considerations: ${animal.notes}`;
    li.append(pNotes);

    const pMagic = document.createElement('p');
    pMagic.classList.add('magical');
    li.append(pMagic);
    if (animal.magical) {
        pMagic.textContent = `${animal.name} is a Magical Creature`;
    }

    const buyBtn = document.createElement('button');
    buyBtn.textContent = 'Add to cart';
    buyBtn.addEventListener('click', () => {
        addToCart(animal.id);
    });
    li.append(buyBtn);

    return li;
}
