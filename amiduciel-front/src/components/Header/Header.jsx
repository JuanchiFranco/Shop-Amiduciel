import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { FiUser, FiLogOut, FiChevronDown } from 'react-icons/fi';
import logo from '../../assets/amilogo.png'; // Adjust the path as necessary

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const { user, isAuthenticated, logout } = useAuth();

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        logout();
        setIsDropdownOpen(false);
    };

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
                    {isAuthenticated ? (
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 rounded-full transition-colors duration-200"
                                aria-haspopup="true"
                                aria-expanded={isDropdownOpen}
                            >
                                <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600">
                                    <FiUser className="w-4 h-4" />
                                </div>
                                <span className="hidden sm:inline">
                                    {user?.username || 'Mi cuenta'}
                                </span>
                                <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
                            </button>
                            
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
                                    <Link
                                        to="/profile"
                                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        <FiUser className="mr-3 w-4 h-4" />
                                        Mi perfil
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        <FiLogOut className="mr-3 w-4 h-4" />
                                        Cerrar sesión
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="px-5 py-2.5 text-sm font-semibold text-white bg-cyan-600 rounded-full hover:bg-cyan-700 transition-colors duration-200 shadow-md hover:shadow-lg hover:shadow-cyan-100"
                        >
                            Iniciar sesión
                        </Link>
                    )}
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