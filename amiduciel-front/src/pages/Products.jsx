import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

const Products = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8); // Number of items per page
    const { products, loading, error } = useProducts();
    
    // Reset to first page when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, selectedCategory]);
    
    // Filter products based on search term and category
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
        
        // Check if product has any category that matches the selected category
        const matchesCategory = selectedCategory === 'all' || 
            product.categories.some(cat => cat.name === selectedCategory);
            
        return matchesSearch && matchesCategory;
    });

    // Get unique categories for filter
    const allCategories = ['all'];
    products.forEach(product => {
        product.categories.forEach(category => {
            if (!allCategories.includes(category.name)) {
                allCategories.push(category.name);
            }
        });
    });
    const categories = [...new Set(allCategories)];
    
    // Get current products
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    // Generate page numbers to show
    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxPagesToShow = 5; // Show max 5 page numbers at a time
        
        if (totalPages <= maxPagesToShow) {
            // If total pages is less than max pages to show, show all pages
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            // Show first page, current page, and pages around it
            const startPage = Math.max(1, currentPage - 2);
            const endPage = Math.min(totalPages, currentPage + 2);
            
            // Always show first page
            if (startPage > 1) {
                pageNumbers.push(1);
                if (startPage > 2) {
                    pageNumbers.push('...');
                }
            }
            
            // Add pages around current page
            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
            }
            
            // Always show last page
            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    pageNumbers.push('...');
                }
                pageNumbers.push(totalPages);
            }
        }
        
        return pageNumbers;
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow bg-gradient-to-b from-cyan-50 to-cyan-100 pt-24 pb-16">
                <div className="container mx-auto px-4 py-12">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-2 mb-4 text-cyan-600 bg-cyan-100 rounded-full text-sm font-semibold">
                            Catálogo
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#004052] mb-4 font-serif">
                            Nuestros Productos
                        </h1>
                        <div className="w-24 h-1.5 bg-cyan-400 mx-auto mb-6 rounded-full"></div>
                        <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                            Descubre nuestra exclusiva selección de productos diseñados para iluminar tu camino.
                        </p>
                        
                        {/* Search and Filter Section */}
                        <div className="max-w-4xl mx-auto mb-12">
                            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                                <div className="relative w-full md:w-96">
                                    <input
                                        type="text"
                                        placeholder="Buscar productos..."
                                        className="w-full px-6 py-3 pr-12 rounded-full border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 shadow-sm"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <svg 
                                        className="absolute right-4 top-3.5 h-5 w-5 text-gray-400" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <select
                                    className="w-full md:w-64 px-4 py-3 rounded-full border border-gray-300 bg-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 shadow-sm appearance-none"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                >
                                    {categories.map(category => (
                                        <option key={category} value={category}>
                                            {category === 'all' ? 'Todas las categorías' : category}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    {loading ? (
                        <div className="text-center py-12">
                            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-600 mb-4"></div>
                            <p className="text-lg text-gray-600">Cargando productos...</p>
                        </div>
                    ) : error ? (
                        <div className="text-center py-12">
                            <p className="text-lg text-red-600">Error al cargar los productos: {error.message}</p>
                        </div>
                    ) : filteredProducts.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {currentProducts.map(product => (
                                    <div key={product.id} className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                                        <ProductCard product={product} />
                                    </div>
                                ))}
                            </div>
                            
                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <div className="text-sm text-gray-600">
                                        Mostrando {Math.min(indexOfFirstItem + 1, filteredProducts.length)}-{Math.min(indexOfLastItem, filteredProducts.length)} de {filteredProducts.length} productos
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <button 
                                            onClick={() => paginate(1)} 
                                            disabled={currentPage === 1}
                                            className="p-2 rounded-full text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
                                            aria-label="Primera página"
                                        >
                                            <FiChevronsLeft className="h-5 w-5" />
                                        </button>
                                        <button 
                                            onClick={() => paginate(currentPage - 1)} 
                                            disabled={currentPage === 1}
                                            className="p-2 rounded-full text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
                                            aria-label="Página anterior"
                                        >
                                            <FiChevronLeft className="h-5 w-5" />
                                        </button>
                                        
                                        {getPageNumbers().map((number, index) => (
                                            <button
                                                key={index}
                                                onClick={() => number !== '...' && paginate(number)}
                                                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                                                    number === currentPage 
                                                        ? 'bg-cyan-600 text-white' 
                                                        : 'text-gray-600 hover:bg-gray-100'
                                                }`}
                                                disabled={number === '...'}
                                            >
                                                {number === '...' ? '...' : number}
                                            </button>
                                        ))}
                                        
                                        <button 
                                            onClick={() => paginate(currentPage + 1)} 
                                            disabled={currentPage === totalPages}
                                            className="p-2 rounded-full text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
                                            aria-label="Siguiente página"
                                        >
                                            <FiChevronRight className="h-5 w-5" />
                                        </button>
                                        <button 
                                            onClick={() => paginate(totalPages)} 
                                            disabled={currentPage === totalPages}
                                            className="p-2 rounded-full text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
                                            aria-label="Última página"
                                        >
                                            <FiChevronsRight className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-lg text-gray-600">No se encontraron productos que coincidan con tu búsqueda.</p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Products;
