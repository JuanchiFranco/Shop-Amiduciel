import React from 'react';
import { getImageUrl } from '../../utils';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const ProductCard = ({ product }) => {
    const { id, name, description, price, images, reviews } = product;

    const renderStars = () => {
        const hasReviews = reviews && reviews.length > 0;
        const rating = hasReviews ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length : 0;
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (hasReviews && rating >= i + 1) {
                stars.push(<FaStar key={i} className="text-yellow-400" />);
            } else if (hasReviews && rating >= i + 0.5) {
                stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-gray-300" />);
            }
        }
        return stars;
    };

    return (
        <div key={id} className="bg-white border border-gray-300 rounded-lg p-4 w-full h-full text-center shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
            {images && images.length > 0 ? (
                <div className="h-48 flex items-center justify-center overflow-hidden rounded-lg mb-4 bg-gray-100">
                    <img
                        src={getImageUrl(images[0].url)}
                        alt={name}
                        className="max-h-full max-w-full object-contain p-2"
                    />
                </div>
            ) : (
                <div className="w-full rounded-lg mb-4 h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No Image Available</span>
                </div>
            )}

            <div className="flex-1 flex flex-col justify-between">
                <div className="overflow-hidden">
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2" title={name}>{name}</h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-2" title={description}>{description}</p>
                </div>

                <div className="mt-2">
                    <p className="text-gray-800 font-bold">
                        {new Intl.NumberFormat('es-CO', {
                            style: 'currency',
                            currency: 'COP'
                        }).format(price)}
                    </p>
                    <div className="mt-1 flex items-center justify-center space-x-1">
                        {renderStars()}
                        <span className="text-xs text-gray-500 ml-1">
                            ({reviews && reviews.length > 0 ? reviews.length : 0})
                        </span>
                    </div>
                </div>

                <button className="mt-4 w-full bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-600 transition">
                    Comprar
                </button>
            </div>
        </div>
    );
};

export default ProductCard;