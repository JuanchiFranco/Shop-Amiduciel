import { useState, useEffect } from 'react';
import productService from '../api/services/products/productService';

export function useProducts() {
    const [products, setProducts] = useState([]);
    const [newProducts, setNewProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const allProducts = await productService.getAllProducts();
                setProducts(allProducts);
            } catch (err) {
                setError(err.message || 'Error fetching products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);
    
    useEffect(() => {
        const fetchNewProducts = async () => {
            try {
                setLoading(true);
                const newProds = await productService.getNewProducts();
                setNewProducts(newProds);
            } catch (err) {
                setError(err.message || 'Error fetching new products');
            } finally {
                setLoading(false);
            }
        };

        fetchNewProducts();
    }, []);

    const getProductByIdDocument = async (idDocument) => {
        try {
            setLoading(true);
            const product = await productService.getProductByIdDocument(idDocument);
            return product;
        } catch (err) {
            setError(err.message || 'Error fetching product by ID document');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return {
        products,
        newProducts,
        loading,
        error,
        getProductByIdDocument
    };
}