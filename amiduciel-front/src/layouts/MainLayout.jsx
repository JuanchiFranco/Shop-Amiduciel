import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import NewsSection from '../pages/NewsSection';
import Home from '../pages/Home';
import AboutSection from '../pages/AboutSection';
import ContactSection from '../pages/ContactSection';


const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <main className="justify-center min-h-screen bg-gray-100">
                <Home />
                <NewsSection />
                <AboutSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;