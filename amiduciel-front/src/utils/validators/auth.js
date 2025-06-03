/**
 * Validates email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if email is valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates login input
 * @param {string} email - User's email
 * @param {string} password - User's password
 * @throws {Error} If validation fails
 */
export const validateLoginInput = (email, password) => {
  if (!email || !password) {
    throw new Error('El correo electrónico y la contraseña son obligatorios');
  }
  
  if (!isValidEmail(email)) {
    throw new Error('Por favor ingresa un correo electrónico válido');
  }
};

/**
 * Validates registration input
 * @param {string} username - User's username
 * @param {string} email - User's email
 * @param {string} password - User's password
 * @throws {Error} If validation fails
 */
export const validateRegisterInput = (username, email, password) => {
  if (!username || !email || !password) {
    throw new Error('Todos los campos son obligatorios');
  }
  
  if (password.length < 6) {
    throw new Error('La contraseña debe tener al menos 6 caracteres');
  }
  
  if (!isValidEmail(email)) {
    throw new Error('Por favor ingresa un correo electrónico válido');
  }

  if (username.length < 3) {
    throw new Error('El nombre de usuario debe tener al menos 3 caracteres');
  }
};
