import React, { useEffect, useState } from "react";
import homeBackground from "../assets/Home1.png";
import { AiOutlineArrowDown } from "react-icons/ai";

const Home = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        setIsLoaded(true);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate parallax effect
    const parallaxStyle = {
        transform: `translate3d(0, ${scrollY * 0.4}px, 0)`,
        transition: 'transform 0.1s ease-out'
    };

    return (
        <section id="home" className="home-section relative h-screen overflow-hidden bg-cyan-900">
            {/* Dynamic Background with Parallax */}
            <div className="absolute inset-0 overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center transform transition-transform duration-1000 ease-out"
                    style={{
                        ...parallaxStyle,
                        backgroundImage: `url(${homeBackground})`,
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                        opacity: isLoaded ? 1 : 0,
                        transition: 'opacity 1.5s ease-in-out'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/90 via-cyan-800/60 to-cyan-700/30"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/40 to-transparent"></div>
                </div>

                {/* Animated floating elements */}
                {[...Array(15)].map((_, i) => (
                    <div 
                        key={i}
                        className="absolute rounded-full bg-white/5"
                        style={{
                            width: `${Math.random() * 10 + 5}px`,
                            height: `${Math.random() * 10 + 5}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>
            
            {/* Content with staggered animations */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
                <div className="max-w-5xl mx-auto transform transition-all duration-1000 px-6">
                    {/* Animated title with gradient text */}
                    <div className="overflow-hidden mb-6">
                        <h1 
                            className={`text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-serif tracking-tight leading-none transform transition-all duration-1000 ${
                                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                            style={{
                                background: 'linear-gradient(135deg, #ffffff 0%, #bae6fd 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                textShadow: '0 0 20px rgba(186, 230, 253, 0.3)'
                            }}
                        >
                            AMIDUCIEL
                        </h1>
                    </div>
                    
                    {/* Animated tagline */}
                    <div className="overflow-hidden mb-12">
                        <p 
                            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-100 ${
                                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                            style={{
                                color: '#e0f2fe',
                                textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
                            }}
                        >
                            Venimos del cielo a guiar tu camino.
                        </p>
                    </div>
                    
                    {/* Animated CTA Button */}
                    <div 
                        className={`transform transition-all duration-1000 delay-200 ${
                            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                    >
                        <a 
                            href="#news" 
                            className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden font-medium tracking-tighter text-cyan-900 bg-white rounded-full hover:bg-opacity-100 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/30"
                        >
                            <span className="relative z-10 flex items-center">
                                <span className="text-lg font-semibold">Descubre más</span>
                                <AiOutlineArrowDown className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
                        </a>
                    </div>
                </div>
                
                {/* Enhanced scroll indicator */}
                <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-300 ${
                    isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'
                }`}>
                    <a 
                        href="#news" 
                        className="flex flex-col items-center group"
                        aria-label="Desplazarse hacia abajo"
                    >
                        <span className="text-sm font-medium text-cyan-100 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                            Desplázate
                        </span>
                        <div className="w-10 h-16 rounded-full border-2 border-cyan-300/50 flex justify-center p-1">
                            <div className="w-1 h-3 bg-cyan-300 rounded-full animate-bounce"></div>
                        </div>
                    </a>
                </div>
            </div>
            
            {/* Modern decorative elements */}
            <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-500/10 to-cyan-300/10 -z-0 blur-xl"></div>
            <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-400/10 to-cyan-600/10 -z-0 blur-xl"></div>
            
            {/* Custom cursor effect */}
            <div className="fixed w-8 h-8 border-2 border-cyan-300 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 mix-blend-difference home-cursor" 
                 style={{ display: 'none', left: 'var(--x, 0)', top: 'var(--y, 0)' }}>
            </div>
            
            {/* Styles for animations */}
            <style jsx>{`
                @keyframes float {
                    0% { transform: translateY(0) translateX(0); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
                }
                
                .home-section {
                    cursor: none;
                }
                
                .home-section a, 
                .home-section button, 
                .home-section .cursor-pointer {
                    cursor: none;
                }
            `}</style>
            
            {/* Mouse move effect */}
            <script dangerouslySetInnerHTML={{
                __html: `
                    const homeSection = document.getElementById('home');
                    const cursor = document.querySelector('.home-cursor');
                    
                    function handleMouseMove(e) {
                        if (homeSection && cursor) {
                            const rect = homeSection.getBoundingClientRect();
                            const isInHomeSection = 
                                e.clientX >= rect.left && 
                                e.clientX <= rect.right && 
                                e.clientY >= rect.top && 
                                e.clientY <= rect.bottom;
                                
                            if (isInHomeSection) {
                                cursor.style.display = 'block';
                                document.documentElement.style.setProperty('--x', e.clientX + 'px');
                                document.documentElement.style.setProperty('--y', e.clientY + 'px');
                            } else {
                                cursor.style.display = 'none';
                            }
                        }
                    }
                    
                    document.addEventListener('mousemove', handleMouseMove);
                    
                    // Cleanup function
                    return () => {
                        document.removeEventListener('mousemove', handleMouseMove);
                    };
                `
            }} />
        </section>
    );
};

export default Home;