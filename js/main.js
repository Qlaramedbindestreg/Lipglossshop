import { getProducts } from './components/product.js';
import { createProductCard } from './components/product-card.js';
import { getItems, calculateTotal } from './components/cart.js';
 
const page = window.location.pathname;
 
if (page === '/index.html') {
    const products = await getProducts();
    const productContainer = document.querySelector('.sale-items');
 
    products.forEach(product => {
        const newProductCard = createProductCard(product);
        productContainer.append(newProductCard);
    });

} else if (page === '/cart.html') {
    const shoppingCartTable = document.querySelector('.shopping-cart__table');
    const cartItems = getItems();
    const cartItemKeysAsArray = Object.keys(cartItems);
 
    cartItemKeysAsArray.forEach(key => {
        const tableRow = document.createElement('tr');
        const amountTableData = document.createElement('td');
        const nameTableData = document.createElement('td');
        const priceTableData = document.createElement('td');
        const removeTableData = document.createElement('td');
        const removeCartButton = document.createElement('td');

        const amountCreateHtml = document.querySelector('.shopping-cart__total-amount');
 
        amountTableData.innerText = cartItems[key].amount;
        nameTableData.innerText = cartItems[key].name;
        priceTableData.innerText = cartItems[key].price;

        removeTableData.innerHTML = '<button class="remove-item">x</button>';
        removeCartButton.setAttribute('data-item-id', key);
 
        tableRow.append(
            amountTableData,
            nameTableData,
            priceTableData,
            removeTableData
        )

        
        shoppingCartTable.append(tableRow);
        tableRow.appendChild(removeTableData);
        
        amountCreateHtml.textContent = calculateTotal();
 

    });
}