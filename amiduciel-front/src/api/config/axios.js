import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const REQUEST_TIMEOUT = 10000; // 10 seconds

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_URL,
  timeout: REQUEST_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for handling errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;
      let errorMessage = 'An error occurred';
      
      if (data?.error?.message) {
        // Traducir mensajes de error comunes de la API
        const errorMessages = {
          // Errores de autenticación
          'Invalid identifier or password': 'Correo o contraseña incorrectos',
          'Email or Username are required': 'El correo electrónico es obligatorio',
          'Password is required': 'La contraseña es obligatoria',
          'Email already taken': 'Este correo electrónico ya está registrado',
          'Username already taken': 'Este nombre de usuario ya está en uso',
          'Too many requests, please try again later.': 'Demasiados intentos. Por favor, inténtalo de nuevo más tarde.',
          'Registration not allowed': 'El registro no está permitido',
          'Invalid login credentials': 'Credenciales de inicio de sesión inválidas',
          'User not found': 'Usuario no encontrado',
          'User not confirmed': 'Usuario no confirmado',
          'User is blocked': 'Usuario bloqueado',
          'Invalid token': 'Token inválido o expirado',
          'Token expired': 'Token expirado',
          'Token invalid': 'Token inválido',
          'Token not found': 'Token no encontrado',
          'Token not provided': 'Token no proporcionado',
          'Token revoked': 'Token revocado',
          'Token expired': 'Token expirado',
          // Errores de validación
          'ValidationError': 'Error de validación',
          'Invalid params': 'Parámetros inválidos',
          'Missing params': 'Faltan parámetros requeridos',
          'Invalid email': 'Correo electrónico inválido',
          'Email already exists': 'El correo electrónico ya está registrado',
          'Username already exists': 'El nombre de usuario ya está en uso',
          'Password too short': 'La contraseña es demasiado corta',
          'Password too weak': 'La contraseña es demasiado débil',
          'Passwords do not match': 'Las contraseñas no coinciden',
          // Errores del servidor
          'Internal server error': 'Error interno del servidor',
          'Service unavailable': 'Servicio no disponible',
          'Request timeout': 'Tiempo de espera agotado',
          'Network error': 'Error de red',
          'Network request failed': 'Fallo en la solicitud de red'
        };
        
        // Buscar el mensaje traducido o usar el mensaje original
        errorMessage = errorMessages[data.error.message] || data.error.message;
      } else if (status === 401) {
        errorMessage = 'No autorizado. Por favor, inicia sesión nuevamente.';
        // Limpiar el token de autenticación
        localStorage.removeItem('authToken');
      } else if (status === 400) {
        errorMessage = 'Solicitud incorrecta. Verifica los datos enviados.';
      } else if (status >= 500) {
        errorMessage = 'Error interno del servidor. Por favor, inténtalo de nuevo más tarde.';
      }
      
      const errorWithMessage = new Error(errorMessage);
      errorWithMessage.status = status;
      return Promise.reject(errorWithMessage);
    } else if (error.request) {
      return Promise.reject(new Error('No se pudo conectar con el servidor. Por favor, verifica tu conexión a internet.'));
    }
    return Promise.reject(error);
  }
);

export default apiClient;
