import { addItem, getItems } from './cart.js';

export function createProductCard(productInformation) {
    const productContainer = document.createElement('div');
    const productImage = document.createElement('img');
    const productTitle = document.createElement('h3');
    const productPrice = document.createElement('p');
    const productAddToCartButton = document.createElement('button');
    // class for styling
    productContainer.classList.add('product-card');
    productAddToCartButton.classList.add('product-button');
    
    // content for product card
    productTitle.innerText = productInformation.title;
    productPrice.innerText = productInformation.price;
    productImage.src = '.' + productInformation.img;

    productAddToCartButton.innerText = 'Add to cart';

    // go to cart
    productAddToCartButton.addEventListener('click', () => {
          addItem(productInformation);
          window.location.href = "./cart.html";

    })

    productContainer.append (
        productImage,
        productTitle, 
        productPrice, 
        productAddToCartButton
    );

    return productContainer;
}