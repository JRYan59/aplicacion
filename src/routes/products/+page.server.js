/** @type {import('./$types').PageLoad} */
export async function load() {
    const response = await fetch('http://localhost:3000/products');
    if (response.ok) {
        const data = await response.json();

        return {
            products: data.Products
        }
    }
}