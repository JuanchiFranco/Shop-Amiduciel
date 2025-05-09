import React from 'react';
import founderPhoto from '../assets/founder.png';

const AboutSection = () => {
    return (
        <section id="about" className="about-section bg-gray-100 py-12 px-6">
            <div className="about-content max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Sobre Nosotros</h1>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="founder-photo md:w-1/3 flex justify-center md:justify-start mb-8 md:mb-0">
                        <img 
                            className="w-64 h-64 rounded-full object-cover"
                            src={founderPhoto}
                            alt="Juana Pérez - Fundadora de Amiduciel" 
                        />
                    </div>
                    <div className="text-content md:w-2/3">
                        <p className="text-lg text-gray-600 mb-4 text-center md:text-left">
                            Amiduciel nació con la visión de ofrecer productos únicos y de alta calidad que inspiran y conectan con las personas. 
                            Nuestra misión es crear experiencias memorables a través de cada uno de nuestros productos.
                        </p>
                        <p className="text-lg text-gray-600 text-center md:text-left">
                            La fundadora, <strong className="font-semibold text-gray-800">Elaida María</strong>, es una apasionada emprendedora con un amor por el diseño y la creatividad. 
                            Su dedicación y visión han sido el motor detrás de Amiduciel desde su inicio.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;