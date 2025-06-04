import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import reviewService from '../api/services/review/reviewService';

export function useReview() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    /**
     * Save a review
     * @param {Object} reviewData - Data of the review to save
     * @returns {Promise<Object>} Response from the server
     */
    const saveReview = useCallback(async (reviewData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await reviewService.saveReview(reviewData);
            return response;
        } catch (err) {
            console.error('Error al guardar la reseña:', err);
            setError(err.message || 'Error al guardar la reseña');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    return { saveReview, loading, error };
}