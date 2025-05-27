import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

import newsImg from '../assets/news.jpg'
import ProductCard from '../components/ProductCard';

import { useNewProducts } from '../hooks/useProducts';

const NewsSection = () => {
    const { newProducts, loading, error } = useNewProducts();
    
    return (
        <section
        id="news"
        className="flex flex-col items-center justify-center bg-cyan-50 min-h-screen"
        >
            <div className="container mx-auto px-4 text-center py-8">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
                Recién Agregados
                </h1>
                <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
                Descubre los productos más recientes que hemos añadido a nuestra colección. <br/>¡No te los pierdas!
                </p>
            </div>

            <div className="relative mt-6 w-full">
                <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{ backgroundImage: `url(${newsImg})` }}
                />

                <div className="relative p-10 max-w-6xl mx-auto">
                    {loading && <p className="text-lg text-gray-600 text-center">Cargando productos...</p>}
                    {error && <p className="text-lg text-red-600 text-center">Error al cargar productos: {error.message}</p>}

                    {!loading && !error && (
                        <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                        >
                        {newProducts.map((product) => (
                            <SwiperSlide key={product.id} className="flex justify-center items-center">
                                <div className="flex justify-center items-center w-full h-full">
                                    <ProductCard product={product} />
                                </div>
                            </SwiperSlide>
                        ))}
                        </Swiper>
                    )}
                </div>
            </div>
        </section>
    );
};

export default NewsSection;