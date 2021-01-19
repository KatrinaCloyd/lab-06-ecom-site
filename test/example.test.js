// IMPORT MODULES under test here:
import { newAnimalListing } from '../products/createNewListing.js';

const test = QUnit.test;

test('shoudld take in aniaml and return a li', (expect) => {
    //Arrange
    const uni = {
        id: 1,
        name: 'Freddy Mercury',
        species: 'Unicorn',
        image: '../assets/unicorn.png',
        price: 999,
        notes: 'Needs a lot of space, unaware of horn length causing frequent gorgings and getting himself stuck.',
        magical: true,
    };
    // Set up your arguments and expectations
    const expected = `<li id="listItem"><h3 class="name">Name: Freddy Mercury</h3><p class="species">Species: Unicorn</p><img src="/assets/unicorn.png"><p class="price">Price: $2,000</p><p class="notes">Special Considerations: Needs a lot of space, unaware of horn length causing
        frequent gorgings and getting himslef stuck. </p><p class="magical">Freddy Mercury is a Magical Creature</p></li>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = newAnimalListing(uni);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
