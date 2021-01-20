// IMPORT MODULES under test here:
import { newAnimalListing } from '../products/createNewListing.js';
import { findById, calcItemTotal } from '../cart/utils.js';
import { animals } from '../products/data.js';

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
    const expected = `<li class="listItem"><h3 class="name">Name: Freddy Mercury</h3><p class="species">Species: Unicorn</p><img src="../assets/unicorn.png"><p class="price">Price: $999</p><p class="notes">Special Considerations: Needs a lot of space, unaware of horn length causing frequent gorgings and getting himself stuck.</p><p class="magical">Freddy Mercury is a Magical Creature</p><button>Add to cart</button></li>`;

    const actual = newAnimalListing(uni);

    expect.equal(actual.outerHTML, expected);
});

test('findById takes a number and returns the correct animal object from animal array', (expect) => {

    const expected = {
        id: 4,
        name: 'Lady Gaga',
        species: 'Cheshire Cat',
        image: '../assets/cheshirecat.png',
        price: 89,
        notes: 'May just be a feral cat.',
        magical: false,
    };

    const actual = findById(4, animals);

    expect.deepEqual(actual, expected);
});

test('calcItemTotal takes in two numbers, multiplies them and returns the answer', (expect) => {

    const expected = 178;

    const actual = calcItemTotal(2, 89);

    expect.deepEqual(actual, expected);
});
