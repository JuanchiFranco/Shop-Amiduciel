import React from 'react';
import founderJuan from '../assets/founders/juan.png';
import founderEle from '../assets/founders/Ele.png';
import founderJose from '../assets/founders/Jose.png';
import { FaYarn, FaHeart, FaHandHoldingHeart } from 'react-icons/fa';

const AboutSection = () => {
    const [activeFounder, setActiveFounder] = React.useState('Ele');

    const founders = {
        Ele: {
            name: 'Elaida María',
            role: 'Creadora & Diseñadora',
            description: 'Apasionada por el tejido y el diseño, Elaida da vida a cada amigurumi con amor y dedicación. Su creatividad y atención al detalle son el corazón de Amiduciel.',
            icon: <FaYarn className="text-2xl text-cyan-500" />
        },
        Juan: {
            name: 'Juan',
            role: 'Innovación & Estrategia',
            description: 'Con una visión clara, Juan impulsa la innovación en cada proyecto. Su experiencia en negocios y tecnología ayuda a llevar la magia de Amiduciel a más personas.',
            icon: <FaHeart className="text-2xl text-cyan-400" />
        },
        Jose: {
            name: 'Jose',
            role: 'Operaciones & Logística',
            description: 'Detrás de escena, Jose asegura que cada amigurumi llegue a su destino con el mismo cariño con el que fue creado. Su precisión y dedicación son invaluables.',
            icon: <FaHandHoldingHeart className="text-2xl text-cyan-300" />
        }
    };

    return (
        <section id="about" className="relative overflow-hidden bg-gradient-to-b from-cyan-50 to-cyan-100 min-h-screen py-16 lg:py-24">
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-cyan-200 bg-opacity-30 -z-0"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-cyan-300 bg-opacity-30 -z-0"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 mb-4 text-cyan-600 bg-cyan-100 rounded-full text-sm font-semibold">
                        Nuestro Equipo
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#004052] mb-4 font-serif">
                        Tejiendo Sonrisas
                    </h1>
                    <div className="w-24 h-1.5 bg-cyan-400 mx-auto mb-6 rounded-full"></div>
                    <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                        Conoce a las manos creativas que dan vida a cada amigurumi con amor y dedicación.
                    </p>
                </div>
                
                <div className="relative max-w-6xl mx-auto">
                    <div className="absolute -top-10 -left-10 w-20 h-20 bg-cyan-200 rounded-full opacity-20"></div>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-300 rounded-full opacity-20"></div>
                    
                    <div className="relative bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-cyan-100">
                        <div className="flex flex-col lg:flex-row">
                            {/* Founder Images */}
                            <div className="w-full lg:w-2/5 p-8 lg:p-12 bg-gradient-to-br from-cyan-50 to-cyan-100">
                                <div className="relative h-full flex flex-col items-center justify-center">
                                    <div className="relative group mb-8">
                                        <div className="absolute -inset-2 bg-cyan-200 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"></div>
                                        <img 
                                            className={`relative w-48 h-48 lg:w-56 lg:h-56 rounded-full object-cover cursor-pointer transition-all duration-300 transform group-hover:scale-105 border-4 border-white shadow-lg ${
                                                activeFounder === 'Ele' ? 'ring-4 ring-cyan-500' : ''
                                            }`}
                                            src={founderEle}
                                            alt="Elaida - Creadora de Amiduciel"
                                            onMouseEnter={() => setActiveFounder('Ele')}
                                        />
                                    </div>
                                    
                                    <div className="flex space-x-6">
                                        {['Juan', 'Jose'].map((founder) => (
                                            <div key={founder} className="relative group">
                                                <div className="absolute -inset-1 bg-cyan-200 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                                                <img 
                                                    className={`relative w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover cursor-pointer transition-all duration-300 transform group-hover:scale-110 border-3 border-white shadow-md ${
                                                        activeFounder === founder ? 'ring-3 ring-cyan-400' : ''
                                                    }`}
                                                    src={founder === 'Juan' ? founderJuan : founderJose}
                                                    alt={`${founder} - Fundador de Amiduciel`}
                                                    onMouseEnter={() => setActiveFounder(founder)}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="mt-8 text-center">
                                        <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm">
                                            <span className="text-cyan-500 mr-2">
                                                {founders[activeFounder].icon}
                                            </span>
                                            <span className="text-cyan-800 font-medium">
                                                {founders[activeFounder].role}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Founder Info */}
                            <div className="w-full lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                                <div className="relative">
                                    <span className="absolute -top-8 -left-8 text-7xl text-cyan-100 font-serif italic">"</span>
                                    <h2 className="text-3xl lg:text-4xl font-bold text-[#004052] mb-4 font-serif">
                                        {founders[activeFounder].name}
                                    </h2>
                                    <div className="w-16 h-1 bg-cyan-400 mb-6 rounded-full"></div>
                                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed relative">
                                        {founders[activeFounder].description}
                                    </p>
                                    <span className="absolute -bottom-8 -right-8 text-7xl text-cyan-100 font-serif italic transform rotate-180">"</span>
                                </div>
                                
                                <div className="mt-8 pt-6 border-t border-cyan-100">
                                    <div className="flex justify-center space-x-4">
                                        {Object.keys(founders).map((key) => (
                                            <button
                                                key={key}
                                                onClick={() => setActiveFounder(key)}
                                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                                    activeFounder === key ? 'bg-cyan-500 w-6' : 'bg-cyan-200'
                                                }`}
                                                aria-label={`Ver información de ${founders[key].name}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;