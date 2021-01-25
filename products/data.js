const ITEMS = 'items';

export function setItemsForSale(items) {
    if (!getItemsForSale()) {
        const stringyItemsForSale = JSON.stringify(items);
        localStorage.setItem(ITEMS, stringyItemsForSale);
    }
}

export function getItemsForSale() {
    const strItems = localStorage.getItem(ITEMS);
    const prseItemsForSale = JSON.parse(strItems);
    return prseItemsForSale;
}

export const animals = [
    {
        id: 1,
        name: 'Freddy Mercury',
        species: 'Unicorn',
        image: '../assets/unicorn.png',
        price: 999,
        notes: 'Needs a lot of space, unaware of horn length causing frequent gorgings and getting himself stuck.',
        magical: true,
    },
    {
        id: 2,
        name: 'Cindy Lauper',
        species: 'Phoenix',
        image: '../assets/phoenix.png',
        price: 450,
        notes: 'Will need a large enclosure with non-flamabale bedding.',
        magical: true,
    },
    {
        id: 3,
        name: 'The Bunny Formerly Known as Prince',
        species: 'Jackalope',
        image: '../assets/jackalope.png',
        price: 200,
        notes: 'Skiddish. Often tries to hide in places that his horns will not fit.',
        magical: false,
    },
    {
        id: 4,
        name: 'Lady Gaga',
        species: 'Cheshire Cat',
        image: '../assets/cheshirecat.png',
        price: 89,
        notes: 'May just be a feral cat.',
        magical: false,
    },
    {
        id: 5,
        name: 'Ziggy Stardust',
        species: 'Dragon',
        image: '../assets/dragon.png',
        price: 899,
        notes: 'Needs lots of space. Will collect and hide your shiny belongings left unguarded.',
        magical: true,
    },
    {
        id: 6,
        name: 'Elvis',
        species: 'Lake Monster',
        image: '../assets/LakeMonster.png',
        price: 399,
        notes: 'Likes his space to be alone. Very reclusive, may or may not even still be alive.',
        magical: false,
    },
    {
        id: 7,
        name: 'Willie Nelson',
        species: 'Yeti',
        image: '../assets/yeti.png',
        price: 299,
        notes: 'Very hairy. Somewhat smelly. Will need more space as he grows.',
        magical: false,
    },
];

