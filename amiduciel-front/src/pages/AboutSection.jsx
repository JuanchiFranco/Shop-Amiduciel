import React from 'react';
import founderJuan from '../assets/founders/juan.png';
import founderEle from '../assets/founders/Ele.png';
import founderJose from '../assets/founders/Jose.png';

const AboutSection = () => {
    const [activeFounder, setActiveFounder] = React.useState('Ele');

    const descriptions = {
        Ele: "Elaida María es una apasionada emprendedora con un amor por el diseño y la creatividad. Su dedicación y visión han sido el motor detrás de Amiduciel desde su inicio.",
        Juan: "Juan es un visionario con experiencia en negocios y tecnología, aportando innovación y estrategia a Amiduciel.",
        Jose: "Jose es un experto en operaciones y logística, asegurando que cada producto llegue a nuestros clientes con la máxima calidad."
    };

    return (
        <section id="about" className="flex flex-col items-center justify-center bg-cyan-50">
            <div className="container mx-auto px-4 text-center py-8">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">Sobre Nosotros</h1>
                <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
                    Conoce a la fundadora de Amiduciel y su equipo.
                </p>
            </div>
            <div className="about-content max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-8 bg-white shadow-lg rounded-lg p-6 w-full">
                    <div className="founder-photos md:w-1/3 flex flex-col items-center mb-8 md:mb-0 space-y-4">
                        <img 
                            className={`w-24 h-24 rounded-full object-cover cursor-pointer ${activeFounder === 'Ele' ? 'ring-4 ring-cyan-500' : ''}`}
                            src={founderEle}
                            alt="Ele - Fundadora de Amiduciel"
                            onMouseEnter={() => setActiveFounder('Ele')}
                        />
                        <div className="flex space-x-4">
                            <img 
                                className={`w-24 h-24 rounded-full object-cover cursor-pointer ${activeFounder === 'Juan' ? 'ring-4 ring-cyan-500' : ''}`}
                                src={founderJuan}
                                alt="Juan - Fundador de Amiduciel"
                                onMouseEnter={() => setActiveFounder('Juan')}
                            />
                            <img 
                                className={`w-24 h-24 rounded-full object-cover cursor-pointer ${activeFounder === 'Jose' ? 'ring-4 ring-cyan-500' : ''}`}
                                src={founderJose}
                                alt="Jose - Fundador de Amiduciel"
                                onMouseEnter={() => setActiveFounder('Jose')}
                            />
                        </div>
                    </div>
                    <div className="text-content md:w-2/3">
                        <p className="text-lg text-gray-600 text-center md:text-left">
                            {descriptions[activeFounder]}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;