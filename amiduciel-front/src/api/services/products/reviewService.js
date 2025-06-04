import apiClient from '../../config/axios';

const reviewService = {
    // guardamos una reseña enviando los datos de la reseña al backend y el authorization bearer token del usuario
    async saveReview(reviewData) {
        try {
            const response = await apiClient.post('/api/reviews', reviewData, {
                headers: {
                    bearer: localStorage.getItem('token') || '',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error al guardar la reseña:', error);
            throw new Error('Error al guardar la reseña');
        }
    }
}

export default reviewService;