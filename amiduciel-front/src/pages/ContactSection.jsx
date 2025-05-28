import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const ContactSection = () => {
    return (
        <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-cyan-50 to-cyan-100 min-h-screen py-16 lg:py-24">
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-cyan-200 bg-opacity-30 -z-0"></div>
            <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-cyan-300 bg-opacity-30 -z-0"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 mb-4 text-cyan-600 bg-cyan-100 rounded-full text-sm font-semibold">
                        Contáctanos
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 font-serif">
                        Hablemos
                    </h1>
                    <div className="w-24 h-1.5 bg-cyan-400 mx-auto mb-6 rounded-full"></div>
                    <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                        ¿Tienes alguna pregunta o comentario? Estamos aquí para ayudarte.
                    </p>
                </div>
                
                <div className="relative max-w-6xl mx-auto">
                    <div className="absolute -top-10 -right-10 w-20 h-20 bg-cyan-200 rounded-full opacity-20"></div>
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-300 rounded-full opacity-20"></div>
                    
                    <div className="relative bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-cyan-100">
                        <div className="flex flex-col lg:flex-row">
                            <div className="w-full lg:w-1/2 p-8 lg:p-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Envíanos un mensaje</h2>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                                Nombre
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-200"
                                                placeholder="Tu nombre"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                Correo Electrónico
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-200"
                                                placeholder="tu@email.com"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                            Mensaje
                                        </label>
                                        <textarea
                                            id="message"
                                            rows="4"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-200"
                                            placeholder="¿En qué podemos ayudarte?"
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200 transform hover:scale-[1.02]"
                                        >
                                            Enviar Mensaje
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className="w-full lg:w-1/2 bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 lg:p-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif">Información de Contacto</h2>
                                
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-white bg-opacity-80 p-3 rounded-full shadow-sm">
                                            <FaEnvelope className="h-6 w-6 text-cyan-500" />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-semibold text-gray-900">Correo</h3>
                                            <a href="mailto:francovargasjuandario@gmail.com" className="mt-1 text-cyan-600 hover:underline">
                                                francovargasjuandario@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-white bg-opacity-80 p-3 rounded-full shadow-sm">
                                            <FaPhoneAlt className="h-6 w-6 text-cyan-400" />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-semibold text-gray-900">Teléfono</h3>
                                            <a href="tel:+573136204943" className="mt-1 text-cyan-600 hover:underline">
                                                +57 313 620 4943
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-12 text-center">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Síguenos</h3>
                                    <div className="flex justify-center space-x-4">
                                        <a href="https://www.facebook.com/profile.php?id=100070841482444" className="bg-white bg-opacity-80 p-3 rounded-full text-cyan-600 hover:bg-white hover:text-cyan-700 transition duration-200 shadow-sm" target="_blank">
                                            <FaFacebook className="h-6 w-6" />
                                        </a>
                                        <a href="https://www.instagram.com/ami_du_ciel/" className="bg-white bg-opacity-80 p-3 rounded-full text-cyan-600 hover:bg-white hover:text-cyan-700 transition duration-200 shadow-sm" target="_blank">
                                            <FaInstagram className="h-6 w-6" />
                                        </a>
                                        <a href="https://wa.me/573136204943" className="bg-white bg-opacity-80 p-3 rounded-full text-cyan-600 hover:bg-white hover:text-cyan-700 transition duration-200 shadow-sm" target="_blank">
                                            <FaWhatsapp className="h-6 w-6" />
                                        </a>
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

export default ContactSection;