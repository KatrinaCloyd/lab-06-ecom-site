import { animals, setItemsForSale, getItemsForSale } from './data.js';
import { newAnimalListing } from './createNewListing.js';

setItemsForSale(animals);
const itemsForSale = getItemsForSale();

const list = document.getElementById('list');

for (let animal of itemsForSale) {
    const animalItem = newAnimalListing(animal);
    list.append(animalItem);
}
