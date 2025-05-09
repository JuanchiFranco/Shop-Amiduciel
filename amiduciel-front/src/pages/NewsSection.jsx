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
        <section id="news">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" >
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold text-gray-800 text-center md:text-left">
                        Recién Agregados
                    </h1>
                    <p className="text-gray-600 text-center md:text-left mt-2">
                        Descubre los productos más recientes que hemos añadido a nuestra colección. ¡No te los pierdas!
                    </p>
                </div>
                <div 
                    className="flex flex-wrap justify-center gap-5 bg-cover bg-center p-10" 
                    style={{
                        backgroundImage: `url(${newsImg})`,
                    }}
                >
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white border border-gray-300 rounded-lg p-4 w-52 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
                            style={{
                                filter: "brightness(1)",
                            }}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full rounded-lg mb-4"
                            />
                            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
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