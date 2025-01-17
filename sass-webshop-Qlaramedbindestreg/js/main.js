import { getProducts } from './components/product.js';
import { createProductCard } from './components/product-card.js';
import { getItems, calculateTotal, deleteItem } from './components/cart.js';

const page = window.location.pathname;
let shoppingCartTable;
let cartItemKeysAsArray;

if (page.endsWith('/') || page.endsWith('/index.html')) {
    const products = await getProducts();
    const productContainer = document.querySelector('.sale-items');

    products.forEach(product => {
        const newProductCard = createProductCard(product);
        productContainer.append(newProductCard);
    });

} else if (page.endsWith('/cart.html')) {
    shoppingCartTable = document.querySelector('.shopping-cart__table');
    const cartItems = getItems();
    cartItemKeysAsArray = Object.keys(cartItems);


    cartItemKeysAsArray.forEach(key => {
        const tableRow = document.createElement('tr');
        const amountTableData = document.createElement('td');
        const nameTableData = document.createElement('td');
        const priceTableData = document.createElement('td');
        const removeTableData = document.createElement('td');

        //button to delete
        const removeCartButton = document.createElement('button');
        removeCartButton.classList.add('remove-item');
        removeCartButton.textContent = 'x'; 
     

        removeTableData.appendChild(removeCartButton);


        const amountTotalHtml = document.querySelector('.shopping-cart__total-amount');

        amountTableData.innerText = cartItems[key].amount;
        nameTableData.innerText = cartItems[key].name;
        priceTableData.innerText = cartItems[key].price + " $";

   
        tableRow.append(

            amountTableData,
            nameTableData,
            priceTableData,
            removeTableData

        )

        shoppingCartTable.append(tableRow);
        tableRow.appendChild(removeTableData);
     

        amountTotalHtml.textContent = calculateTotal() + " $";


    });
}

