const API_URL = import.meta.env.VITE_API_URL;

export async function getProducts () {
    try {
        const response = await fetch(`${API_URL}/api/products`);
        if (!response.ok) {
            throw new Error('Error fetching products');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export async function getNewProducts() {
    try {
        const response = await fetch(`${API_URL}/api/new-products`);
        if (!response.ok) {
            throw new Error('Error fetching new products');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching new products:', error);
        throw error;
    }
}