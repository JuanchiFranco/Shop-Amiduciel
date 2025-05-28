import { useState, useEffect } from 'react';
import logo from '../../assets/amilogo.png'; // Adjust the path as necessary

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled 
                    ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-gray-100' 
                    : 'bg-white/80 backdrop-blur-sm border-b border-gray-100/50'
            }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
                <div className="flex items-center">
                    <a href="#" onClick={scrollToTop} className="cursor-pointer">
                        <img 
                            src={logo} 
                            alt="Logo" 
                            className={`h-14 w-auto transition-all duration-300 ${
                                scrolled ? 'h-12' : 'h-14'
                            }`} 
                        />
                    </a>
                </div>
                
                <div className="hidden md:flex items-center space-x-8">
                    <a 
                        href="#" 
                        onClick={scrollToTop}
                        className={`text-base font-medium transition-colors duration-200 ${
                            scrolled 
                                ? 'text-gray-700 hover:text-cyan-600' 
                                : 'text-gray-800 hover:text-cyan-600'
                        }`}
                    >
                        Inicio
                    </a>
                    <a 
                        href="#news" 
                        className={`text-base font-medium transition-colors duration-200 ${
                            scrolled 
                                ? 'text-gray-700 hover:text-cyan-600' 
                                : 'text-gray-800 hover:text-cyan-600'
                        }`}
                    >
                        Comprar
                    </a>
                    <a 
                        href="#about" 
                        className={`text-base font-medium transition-colors duration-200 ${
                            scrolled 
                                ? 'text-gray-700 hover:text-cyan-600' 
                                : 'text-gray-800 hover:text-cyan-600'
                        }`}
                    >
                        Sobre Nosotros
                    </a>
                    <a 
                        href="#contact" 
                        className={`text-base font-medium transition-colors duration-200 ${
                            scrolled 
                                ? 'text-gray-700 hover:text-cyan-600' 
                                : 'text-gray-800 hover:text-cyan-600'
                        }`}
                    >
                        Contáctanos
                    </a>
                    <a 
                        href="/login" 
                        className="px-5 py-2.5 text-sm font-semibold text-white bg-cyan-600 rounded-full hover:bg-cyan-700 transition-colors duration-200 shadow-md hover:shadow-lg hover:shadow-cyan-100"
                    >
                        Login
                    </a>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button 
                        className="text-gray-700 hover:text-cyan-600 focus:outline-none"
                        aria-label="Menú"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
}