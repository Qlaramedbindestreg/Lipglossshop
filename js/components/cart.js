//remember product + amount

let items = {};



//add product
export function addItem(item, amount = 1) {
       items[item.title] = {
        name: item.title, 
        amount: amount, 
        price: item.price
    }
     
    updateLocalStorage();
}

//show product

function updateItems() {
    const localStorageItems = localStorage.getItem('cart') ?? {};
    
    const localStorageItemsAsObject = JSON.parse(localStorageItems);

    items = localStorageItemsAsObject;

}

function updateLocalStorage() {
    const itemsAsString = JSON.stringify(items);
    localStorage.setItem('cart', itemsAsString);
}

export function getItems() {
    updateItems();
    return items;
}

//remove product

document.addEventListener('click', function(event) {
   if (event.target.classList.contains('remove-item')) {
    const itemToDelete = event.target.getAttribute('data-item-id');

    deleteItem(itemToDelete);
    
   }
})

export function deleteItem(itemToDelete) {
    updateItems();

    delete items[itemToDelete];

    updateLocalStorage();
}

//calculate price
export function calculateTotal() {
    updateItems();

    const itemKeysAsArray = Object.keys(items);

    let totalPrice = 0

    itemKeysAsArray.forEach(itemName => {
        const item = items[itemName]

        totalPrice += item.price * item.amount;

    });

    return totalPrice.toFixed(2);
}

//change type

