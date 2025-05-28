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
    throw new Error('Email and password are required');
  }
  
  if (!isValidEmail(email)) {
    throw new Error('Please enter a valid email address');
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
    throw new Error('All fields are required');
  }
  
  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters long');
  }
  
  if (!isValidEmail(email)) {
    throw new Error('Please enter a valid email address');
  }

  if (username.length < 3) {
    throw new Error('Username must be at least 3 characters long');
  }
};
