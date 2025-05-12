import React from 'react';
import floresImg from '../assets/products/flores.jpg';
import newsImg from '../assets/news.jpg'

const products = [
    {
        id: 1,
        name: 'Producto 1',
        price: 19.99,
        descripcion: 'Descripción del producto 1',
        patron: 'Patrón 1',
        image: floresImg,
    },
    {
        id: 2,
        name: 'Producto 2',
        price: 29.99,
        descripcion: 'Descripción del producto 2',
        patron: 'Patrón 2',
        image: floresImg,
    },
    {
        id: 3,
        name: 'Producto 3',
        price: 39.99,
        descripcion: 'Descripción del producto 3',
        patron: 'Patrón 3',
        image: floresImg,
    },
];

const NewsSection = () => {
    return (
        <section
        id="news"
        className="flex flex-col items-center justify-center bg-cyan-50"
        >
            <div className="container mx-auto px-4 text-center py-8">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
                Recién Agregados
                </h2>
                <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
                Descubre los productos más recientes que hemos añadido a nuestra colección. <br/>¡No te los pierdas!
                </p>
            </div>

            <div className="relative mt-6 w-full">
                <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{ backgroundImage: `url(${newsImg})` }}
                />

                <div className="relative flex flex-wrap justify-center gap-5 p-10">
                {products.map((product) => (
                    <div
                    key={product.id}
                    className="bg-white border border-gray-300 rounded-lg p-4 w-52 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
                    >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full rounded-lg mb-4"
                    />
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-2">{product.descripcion}</p>
                    <p className="text-gray-700 font-medium">
                        <strong>Patrón:</strong> {product.patron}
                    </p>
                    <p className="text-gray-800 font-bold mt-2">
                        <strong>Precio:</strong> ${product.price.toFixed(2)}
                    </p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};

export default NewsSection;