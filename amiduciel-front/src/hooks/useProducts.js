import { useState, useEffect } from 'react';
import { getProducts, getNewProducts } from '../services/products';

export function useProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProducts();
                setProducts(productsData);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return { products, loading, error };
}

export function useNewProducts() {
    const [newProducts, setNewProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNewProducts = async () => {
            try {
                const newProductsData = await getNewProducts();
                setNewProducts(newProductsData);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchNewProducts();
    }, []);

    return { newProducts, loading, error };
}