import logo from '../../assets/amilogo.png'; // Adjust the path as necessary

export default function Navbar() {
    return (
        <>
            <header className="bg-transparent border-b border-gray-300 top-0 w-full z-10 shadow-sm">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global"> {/* Reduced padding */}
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="h-16 w-auto" />
                    </div>
                    
                    <div className="flex items-center space-x-6">
                        <a href="#" className="text-base font-semibold text-gray-900 hover:text-gray-700">Inicio</a>
                        <a href="#news" className="text-base font-semibold text-gray-900 hover:text-gray-700">Comprar</a>
                        <a href="#about" className="text-base font-semibold text-gray-900 hover:text-gray-700">Sobre Nosotros</a>
                        <a href="#contact" className="text-base font-semibold text-gray-900 hover:text-gray-700">Contáctanos</a>
                        <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-500">
                            Entrar
                        </button>
                    </div>
                </nav>
            </header>
        </>
    );
}