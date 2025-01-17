const PRODUCTS_URL = './public/assets/products.json';

export async function getProducts() {
    const response = await fetch(PRODUCTS_URL);
    const data = await response.json();

    return data;
}

