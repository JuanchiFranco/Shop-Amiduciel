import apiClient from '../../config/axios';

const productService = {
    /**
     * Fetches all products
     * @returns {Promise<Object[]>} List of products
     */
    async getAllProducts() {
        try {
            const response = await apiClient.get('/api/products');
            return response.data;
        } catch (error) {
            throw error;     
        }
    },
    
    /**
     * Fetches new products
     * @returns {Promise<Object[]>} List of new products
     */
    async getNewProducts() {
        try {
            const response = await apiClient.get('/api/new-products');
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    
    /**
     * Fetches a product by its document ID
     * @param {string} idDocument - The document ID of the product
     * @returns {Promise<Object>} Product data
     */
    async getProductByIdDocument(idDocument) {
        if (!idDocument) {
            throw new Error('ID de documento no proporcionado');
        }
        try {
            const response = await apiClient.get(`/api/products/${idDocument}`);
            // Asegurarse de que la respuesta tenga datos
            if (!response.data) {
                throw new Error('No se encontraron datos del producto');
            }
            return response.data;
        } catch (error) {
            console.error('Error en getProductByIdDocument:', error);
            throw error;
        }
    }
}

export default productService;