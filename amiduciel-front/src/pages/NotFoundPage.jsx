import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404</h1>
            <p style={styles.message}>La página que buscas no existe.</p>
            <Link to="/" style={styles.link}>Volver al inicio</Link>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f8f9fa',
        color: '#343a40',
    },
    title: {
        fontSize: '6rem',
        margin: '0',
    },
    message: {
        fontSize: '1.5rem',
        margin: '1rem 0',
    },
    link: {
        fontSize: '1.2rem',
        color: '#007bff',
        textDecoration: 'none',
    },
};

export default NotFoundPage;