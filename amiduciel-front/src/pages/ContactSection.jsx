import React from 'react';

const ContactSection = () => {
    return (
        <section className="flex flex-col items-center justify-center bg-cyan-200 min-h-screen">
            <div className="container mx-auto px-4 text-center py-8">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">Contáctanos</h1>
                <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
                    Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte.
                </p>
            </div>
            <div className="contact-form max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <form className="flex flex-col items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        <input type="text" placeholder="Nombre" className="p-2 border border-gray-300 rounded w-full" required />
                        <input type="email" placeholder="Correo Electrónico" className="p-2 border border-gray-300 rounded w-full" required />
                    </div>
                    <textarea placeholder="Mensaje" className="mt-4 p-2 border border-gray-300 rounded w-full" rows="4" required></textarea>
                    <button type="submit" className="mt-4 bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-600 transition duration-300">
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;