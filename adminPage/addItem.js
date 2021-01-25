const adminForm = document.getElementById('add-animal-listing');

adminForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formInfo = new FormData(adminForm);
    const newAnimalInfo = {
        id: formInfo.get('id'),
        name: formInfo.get('name'),
        species: formInfo.get('species'),
        image: formInfo.get('image'),
        price: formInfo.get('price'),
        notes: formInfo.get('notes'),
        magical: formInfo.get('magical')
    };
    console.log(newAnimalInfo);
});
