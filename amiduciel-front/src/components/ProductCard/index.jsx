import React from 'react';
import { getImageUrl } from '../../utils';

const ProductCard = ({ product }) => {
    const { id, name, description, price, images } = product;
    return (
        <div key={id} className="bg-white border border-gray-300 rounded-lg p-4 w-52 text-center shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col ">
            {images && images.length > 0 ? (
                <div className="h-48 overflow-hidden rounded-lg mb-4">
                    <img
                    src={getImageUrl(images[0].url)}
                    alt={name}
                    className="w-full rounded-lg mb-4"
                    />
                </div>
                
            ) : (
                <div className="w-full rounded-lg mb-4 h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No Image Available</span>
                </div>
            )}

            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-lg font-semibold mb-2">{name}</h3>
                    <p className="text-gray-600 mb-2">{description}</p>
                </div>

                <p className="text-gray-800 font-bold mt-2">
                    {new Intl.NumberFormat('es-CO', {
                    style: 'currency',
                    currency: 'COP'
                    }).format(price)}
                </p>

                <button className="mt-4 w-full bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-600 transition">
                    Comprar
                </button>
            </div>
        </div>
    );
};

export default ProductCard;