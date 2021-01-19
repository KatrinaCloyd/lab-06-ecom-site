import { animals } from './data.js';
import { newAnimalListing } from './createNewListing.js';


const list = document.getElementById('list');

for (let animal of animals) {
    const animalItem = newAnimalListing(animal);
    list.append(animalItem);
}
