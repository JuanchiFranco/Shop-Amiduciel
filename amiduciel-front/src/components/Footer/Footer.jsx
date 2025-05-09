import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-white text-gray-800 py-4 text-center border-t border-gray-300">
            <p>&copy; {new Date().getFullYear()} Amiduciel. All rights reserved.</p>
        </footer>
    );
};

export default Footer;