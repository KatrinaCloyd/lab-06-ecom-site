// IMPORT MODULES under test here:
import { newAnimalListing } from '../products/createNewListing.js';

const test = QUnit.test;

test('shoudld take in aniaml and return a li', (expect) => {
    const uni = {
        id: 1,
        name: 'Freddy Mercury',
        species: 'Unicorn',
        image: '../assets/unicorn.png',
        price: 999,
        notes: 'Needs a lot of space, unaware of horn length causing frequent gorgings and getting himself stuck.',
        magical: true,
    };
    const expected = `<li class="listItem"><h3 class="name">Name: Freddy Mercury</h3><p class="species">Species: Unicorn</p><img src="/assets/Unicorn.png"><p class="price">Price: $999</p><p class="notes">Special Considerations: Needs a lot of space, unaware of horn length causing frequent gorgings and getting himself stuck.</p><p class="magical">Freddy Mercury is a Magical Creature</p><button>Add to cart</button></li>`;

    const actual = newAnimalListing(uni);

    expect.equal(actual.outerHTML, expected);
});
