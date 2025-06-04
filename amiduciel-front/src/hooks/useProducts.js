import React, { useState, useEffect, useCallback } from 'react';
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

    const getProductByIdDocument = React.useCallback(async (idDocument) => {
        if (!idDocument) {
            throw new Error('ID de documento no proporcionado');
        }
        try {
            const product = await productService.getProductByIdDocument(idDocument);
            return product;
        } catch (err) {
            console.error('Error en getProductByIdDocument:', err);
            throw err;
        }
    }, []);

    return {
        products,
        newProducts,
        loading,
        error,
        getProductByIdDocument
    };
}