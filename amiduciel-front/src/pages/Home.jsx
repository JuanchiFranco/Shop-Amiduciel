import React from "react";
import homeBackground from "../assets/Home1.png"; // Importa la imagen de fondo
import { AiOutlineArrowDown } from "react-icons/ai";

const Home = () => {
    return (
        <section id="home" className="relative h-screen bg-cyan-50">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${homeBackground})`,
                    filter: "brightness(0.7)",
                }}
            ></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-gray-800">
                <h1 className="text-white text-4xl font-bold md:text-8xl">AMIDUCIEL</h1>
                <p className="text-white mt-4 text-lg md:text-4xl">
                    Venimos del cielo a guiar tu camino.
                </p>
                <a href="#news" className="mt-6 text-white text-4xl md:text-6xl">
                    <AiOutlineArrowDown className="text-4xl md:text-6xl animate-bounce" />
                </a>
            </div>
        </section>
    );
};

export default Home;