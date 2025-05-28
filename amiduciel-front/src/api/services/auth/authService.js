import apiClient from '../../config/axios';
import { validateLoginInput, validateRegisterInput } from '../../../utils/validators/auth';

/**
 * Authentication service for handling user authentication
 */
const authService = {
  /**
   * Logs in a user
   * @param {string} email - User's email
   * @param {string} password - User's password
   * @returns {Promise<Object>} User data and JWT token
   */
  async login(email, password) {
    try {
      validateLoginInput(email, password);
      
      const response = await apiClient.post('/api/auth/local', {
        identifier: email.trim(),
        password: password.trim(),
      });

      if (response.data?.jwt) {
        localStorage.setItem('authToken', response.data.jwt);
      }

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Registers a new user
   * @param {string} username - User's username
   * @param {string} email - User's email
   * @param {string} password - User's password
   * @returns {Promise<Object>} Registered user data and JWT token
   */
  async register(username, email, password) {
    try {
      validateRegisterInput(username, email, password);
      
      const response = await apiClient.post('/api/auth/local/register', {
        username: username.trim(),
        email: email.trim().toLowerCase(),
        password: password.trim(),
      });

      if (response.data?.jwt) {
        localStorage.setItem('authToken', response.data.jwt);
      }

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Logs out the current user
   */
  logout() {
    localStorage.removeItem('authToken');
  },

  /**
   * Gets the current user's authentication status
   * @returns {boolean} True if user is authenticated
   */
  isAuthenticated() {
    return !!localStorage.getItem('authToken');
  },

  /**
   * Gets the current authentication token
   * @returns {string|null} The authentication token or null if not authenticated
   */
  getToken() {
    return localStorage.getItem('authToken');
  },
};

export default authService;
