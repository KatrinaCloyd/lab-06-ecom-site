// IMPORT MODULES under test here:
import { newAnimalListing } from '../products/createNewListing.js';
import { findById, calcItemTotal, calcOrderTotal } from '../cart/cartUtils.js';
import { renderLineItems } from '../cart/renderLineItems.js';
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
    const expected = `<li class="listItem"><h3 class="name">Name: Freddy Mercury</h3><p class="species">Species: Unicorn</p><img src="../assets/unicorn.png"><p class="price">Price: $999</p><p class="notes">Special Considerations: Needs a lot of space, unaware of horn length causing frequent gorgings and getting himself stuck.</p><p class="magical">Freddy Mercury is a Magical Creature</p><input type="number" class="addQty"><button>Add to cart</button></li>`;

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

test('renderLineItems takes in cartItem the corresponding animal and returns a table row', (expect) => {
    const lineItem = {
        id: 4,
        quantity: 3
    };
    const item = findById(lineItem.id, animals);
    const expected = `<tr><td>Lady Gaga</td><td>Cheshire Cat</td><td>No</td><td>3</td><td>$267</td></tr>`;

    const actual = renderLineItems(lineItem, item);

    expect.deepEqual(actual.outerHTML, expected);
});

test('calcOrderTotal takes in cart array and the animal array and gives the total of all items in the cart', (expect) => {
    const expected = 2626;

    const cartItems = [{
        id: 2,
        quantity: 1
    },
    {
        id: 4,
        quantity: 2
    },
    {
        id: 1,
        quantity: 2
    },
    ];

    const animals = [
        {
            id: 1,
            name: 'Freddy Mercury',
            species: 'Unicorn',
            price: 999,
        },
        {
            id: 2,
            name: 'Cindy Lauper',
            species: 'Phoenix',
            price: 450,
        },
        {
            id: 4,
            name: 'Lady Gaga',
            species: 'Cheshire Cat',
            price: 89,
        },
    ];

    const actual = calcOrderTotal(cartItems, animals);

    expect.equal(actual, expected);
});
