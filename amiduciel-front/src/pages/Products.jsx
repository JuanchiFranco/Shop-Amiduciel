import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Products = () => {
    return (
        <div>
            <Header />
            <main className="min-h-screen bg-gray-100 pt-24">
                <div className="container mx-auto px-4 py-12">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Nuestros Productos</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Product cards will go here */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="h-48 bg-gray-200"></div>
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">Producto de Ejemplo</h2>
                                <p className="text-gray-600 mb-4">Descripción del producto.</p>
                                <button className="w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition-colors">
                                    Ver Detalles
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Products;
