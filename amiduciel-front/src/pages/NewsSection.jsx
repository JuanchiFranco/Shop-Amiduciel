import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import '../styles/swiper-custom.css';

import newsImg from '../assets/news.jpg'
import ProductCard from '../components/ProductCard';

import { useProducts } from '../hooks/useProducts';

const NewsSection = () => {
    const { newProducts, loading, error } = useProducts();
    
    return (
        <section
            id="news"
            className="relative overflow-hidden bg-gradient-to-b from-cyan-50 to-cyan-100 min-h-screen py-16 lg:py-24"
        >
            <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-cyan-200 bg-opacity-30 -z-0"></div>
            <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-cyan-300 bg-opacity-30 -z-0"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 mb-4 text-cyan-600 bg-cyan-100 rounded-full text-sm font-semibold">
                        Novedades
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#004052] mb-4 font-serif">
                        Recién Agregados
                    </h1>
                    <div className="w-24 h-1.5 bg-cyan-400 mx-auto mb-6 rounded-full"></div>
                    <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                        Descubre los productos más recientes que hemos añadido a nuestra colección. ¡No te los pierdas!
                    </p>
                </div>

                <div className="relative mt-6 w-full">
                    <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url(${newsImg})` }} />
                    
                    <div className="relative px-4 sm:px-6 lg:px-8 pt-16 pb-20 max-w-7xl mx-auto">
                        {loading && <p className="text-lg text-gray-600 text-center">Cargando productos...</p>}
                        {error && <p className="text-lg text-red-600 text-center">Error al cargar productos: {error.message}</p>}

                        {!loading && !error && (
                            <div className="relative">
                                <div className="absolute -top-10 -right-10 w-20 h-20 bg-cyan-200 rounded-full opacity-20"></div>
                                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-300 rounded-full opacity-20"></div>
                                
                                <div className="relative bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-cyan-100 p-6">
                                    <Swiper
                                        slidesPerView={1}
                                        spaceBetween={30}
                                        loop={true}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={true}
                                        breakpoints={{
                                            640: {
                                                slidesPerView: 2,
                                                spaceBetween: 20,
                                            },
                                            1024: {
                                                slidesPerView: 3,
                                                spaceBetween: 30,
                                            },
                                        }}
                                        className="mySwiper w-full h-full pb-12"
                                        modules={[Pagination, Navigation]}
                                    >
                                        {newProducts.map((product) => (
                                            <SwiperSlide key={product.id} className="flex justify-center items-center">
                                                <div className="flex justify-center items-stretch h-full p-4">
                                                    <div className="w-full h-full">
                                                        <ProductCard product={product} />
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsSection;