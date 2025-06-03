import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../api/services/auth/authService';

/**
 * Custom hook for handling authentication state and operations
 * @returns {Object} Authentication context and methods
 */
export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check if user is authenticated on initial load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = authService.getToken();
        if (token) {
          // Optionally validate token with backend
          setIsAuthenticated(true);
        }
      } catch (err) {
        console.error('Auth check failed:', err);
        authService.logout();
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  /**
   * Handle user login
   * @param {string} email - User's email
   * @param {string} password - User's password
   */
  const login = useCallback(async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const userData = await authService.login(email, password);
      setUser(userData.user);
      setIsAuthenticated(true);
      return userData;
    } catch (err) {
      setError(err.message || 'Error al iniciar sesión. Verifica tus credenciales.');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Handle user registration
   * @param {string} username - User's username
   * @param {string} email - User's email
   * @param {string} password - User's password
   */
  const register = useCallback(async (username, email, password) => {
    setLoading(true);
    setError(null);
    try {
      const userData = await authService.register(username, email, password);
      setUser(userData.user);
      setIsAuthenticated(true);
      return userData;
    } catch (err) {
      setError(err.message || 'Error al registrar el usuario. Por favor, inténtalo de nuevo.');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Handle user logout
   */
  const logout = useCallback(() => {
    authService.logout();
    setUser(null);
    setIsAuthenticated(false);
    navigate('/login');
  }, [navigate]);

  return {
    user,
    loading,
    error,
    isAuthenticated,
    login,
    register,
    logout,
    getToken: authService.getToken,
  };
}