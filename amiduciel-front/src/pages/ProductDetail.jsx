import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { useAuth } from '../hooks/useAuth';
import { useReview } from '../hooks/useReview';
import { FaStar, FaRegStar, FaStarHalfAlt, FaArrowLeft } from 'react-icons/fa';
import { getImageUrl } from '../utils';

const ProductDetail = () => {
    const { idDocument } = useParams();
    const navigate = useNavigate();
    const { getProductByIdDocument } = useProducts();
    const { isAuthenticated, user } = useAuth();
    const { saveReview, loading: isSubmitting, error: reviewError } = useReview();
    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reviewRating, setReviewRating] = useState(5);
    const [reviewComment, setReviewComment] = useState('');
    const [reviewSuccess, setReviewSuccess] = useState('');

    useEffect(() => {
        let isMounted = true;

        const fetchProduct = async () => {
            if (!idDocument) {
                if (isMounted) {
                    setLoading(false);
                    setError('ID de producto no proporcionado');
                }
                return;
            }

            try {
                if (isMounted) {
                    setLoading(true);
                    setError(null);
                }

                const productData = await getProductByIdDocument(idDocument);
                
                if (isMounted) {
                    setProduct(productData);
                    if (productData?.images?.length > 0) {
                        setMainImage(productData.images[0].url);
                    }
                }
            } catch (err) {
                console.error('Error fetching product:', err);
                if (isMounted) {
                    setError('Error al cargar el producto. Por favor, inténtalo de nuevo.');
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchProduct();

        return () => {
            isMounted = false;
        };
    }, [idDocument, getProductByIdDocument]);

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (rating >= i + 1) {
                stars.push(<FaStar key={i} className="text-yellow-400" />);
            } else if (rating >= i + 0.5) {
                stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-gray-300" />);
            }
        }
        return stars;
    };

    const renderRatingStars = (reviews) => {
        if (!reviews || reviews.length === 0) return null;
        
        const rating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
        
        return (
            <div className="flex items-center mt-1">
                <div className="flex">
                    {renderStars(rating)}
                </div>
                <span className="text-gray-600 text-sm ml-2">
                    ({reviews.length} {reviews.length === 1 ? 'reseña' : 'reseñas'})
                </span>
            </div>
        );
    };

    const handleReviewSubmit = async (e) => {
        e.preventDefault();
        
        if (!reviewComment.trim()) {
            return;
        }
        
        try {
            const productId = product.id || product._id;
            
            if (!productId) {
                throw new Error('No se pudo obtener el ID del producto');
            }
            
            await saveReview({
                productId: productId,
                rating: reviewRating,
                comment: reviewComment
            });
            
            // Refresh product data to get the latest reviews
            const updatedProduct = await getProductByIdDocument(idDocument);
            setProduct(updatedProduct);
            
            setReviewSuccess('¡Gracias por tu reseña!');
            setReviewComment('');
            setReviewRating(5);
            
            // Clear success message after 3 seconds
            setTimeout(() => setReviewSuccess(''), 3000);
        } catch (err) {
            console.error('Error submitting review:', err);
            // Error is already handled by the useReview hook
        }
    }; 
    
    const handleRatingChange = (rating) => {
        setReviewRating(rating);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
            </div>
        );
    }


    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Producto no encontrado</h2>
                <p className="text-gray-600 mb-6">Lo sentimos, no pudimos encontrar el producto que estás buscando.</p>
                <Link
                    to="/products"
                    className="px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
                >
                    Volver a la tienda
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4 border-b border-gray-200">
                        <Link
                            to="/products"
                            className="inline-flex items-center text-cyan-600 hover:text-cyan-800 transition-colors"
                        >
                            <FaArrowLeft className="mr-2" />
                            Volver a productos
                        </Link>
                    </div>
                    
                    <div className="md:flex">
                        {/* Product Images */}
                        <div className="md:w-1/2 p-6">
                            <div className="h-96 mb-4 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
                                {mainImage ? (
                                    <img
                                        src={getImageUrl(mainImage)}
                                        alt={product.name}
                                        className="max-h-full max-w-full object-contain p-4"
                                    />
                                ) : (
                                    <div className="text-gray-400">No hay imagen disponible</div>
                                )}
                            </div>
                            
                            {product.images && product.images.length > 1 && (
                                <div className="grid grid-cols-4 gap-2 mt-4">
                                    {product.images.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setMainImage(image.url)}
                                            className={`h-20 border rounded-md overflow-hidden ${mainImage === image.url ? 'ring-2 ring-cyan-500' : ''}`}
                                        >
                                            <img
                                                src={getImageUrl(image.url)}
                                                alt={`${product.name} ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        
                        {/* Product Info */}
                        <div className="md:w-1/2 p-6 border-t md:border-t-0 md:border-l border-gray-200">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                            
                            {product.reviews && product.reviews.length > 0 && renderRatingStars(product.reviews)}
                            
                            <div className="mt-6">
                                <span className="text-3xl font-bold text-gray-900">
                                    {new Intl.NumberFormat('es-CO', {
                                        style: 'currency',
                                        currency: 'COP'
                                    }).format(product.price)}
                                </span>
                            </div>
                            
                            <div className="mt-6">
                                <h3 className="text-sm font-medium text-gray-900">Descripción</h3>
                                <p className="mt-2 text-gray-600">
                                    {product.description || 'No hay descripción disponible para este producto.'}
                                </p>
                            </div>
                            
                            {product.categories && product.categories.length > 0 && (
                                <div className="mt-6">
                                    <h3 className="text-sm font-medium text-gray-900">Categorías</h3>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {product.categories.map((category) => (
                                            <span
                                                key={category.id}
                                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800"
                                            >
                                                {category.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            
                            <div className="mt-8">
                                <button
                                    className="w-full bg-cyan-600 text-white py-3 px-6 rounded-md font-medium hover:bg-cyan-700 transition-colors"
                                    onClick={() => {}}
                                >
                                    Comprar
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Reviews Section */}
                    <div className="border-t border-gray-200 p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Opiniones de clientes</h2>
                        
                        {/* Review Form for Authenticated Users */}
                        {isAuthenticated && (
                            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">Escribe una reseña</h3>
                                {reviewSuccess && (
                                    <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
                                        {reviewSuccess}
                                    </div>
                                )}
                                {reviewError && (
                                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                                        {reviewError}
                                    </div>
                                )}
                                <form onSubmit={handleReviewSubmit}>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Calificación
                                        </label>
                                        <div className="flex items-center">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    type="button"
                                                    onClick={() => handleRatingChange(star)}
                                                    className="focus:outline-none"
                                                >
                                                    {star <= reviewRating ? (
                                                        <FaStar className="text-yellow-400 text-2xl" />
                                                    ) : (
                                                        <FaRegStar className="text-gray-400 text-2xl" />
                                                    )}
                                                </button>
                                            ))}
                                            <span className="ml-2 text-sm text-gray-500">
                                                {reviewRating} de 5 estrellas
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                                            Comentario
                                        </label>
                                        <textarea
                                            id="comment"
                                            rows="4"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                                            placeholder="¿Qué te pareció el producto?"
                                            value={reviewComment}
                                            onChange={(e) => setReviewComment(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50"
                                    >
                                        {isSubmitting ? 'Enviando...' : 'Enviar reseña'}
                                    </button>
                                </form>
                            </div>
                        )}
                        
                        {/* Existing Reviews */}
                        {product.reviews && product.reviews.length > 0 ? (
                            <div className="space-y-6">
                                {product.reviews.map((review, index) => (
                                    <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                                        <div className="flex items-center mb-2">
                                            <div className="flex">
                                                {renderStars(review.rating)}
                                            </div>
                                            <span className="ml-2 text-sm font-medium text-gray-900">
                                                {review?.user?.username || 
                                                 (Array.isArray(review?.user) ? (review.user[0]?.username || 'Anónimo') : 'Anónimo')}
                                            </span>
                                        </div>
                                        <p className="text-gray-600">{review.comment}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-500">Aún no hay reseñas para este producto.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
