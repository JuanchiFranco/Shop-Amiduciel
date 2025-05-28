# Authentication Service

This directory contains the authentication-related services and utilities for the application.

## Structure

- `authService.js`: Main authentication service with login, register, and token management
- `index.js`: Exports the auth service

## Usage

### Using the Auth Service Directly

```javascript
import authService from './api/services/auth';

// Login
try {
  const userData = await authService.login(email, password);
  console.log('Logged in:', userData);
} catch (error) {
  console.error('Login failed:', error.message);
}

// Register
try {
  const userData = await authService.register(username, email, password);
  console.log('Registered:', userData);
} catch (error) {
  console.error('Registration failed:', error.message);
}
```

### Using the useAuth Hook

```jsx
import { useAuth } from '../../hooks/useAuth';

function LoginForm() {
  const { login, loading, error } = useAuth();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      // Redirect or update UI
    } catch (err) {
      // Error is already set by the hook
    }
  };
  
  return (
    // Your form JSX
  );
}
```

### Using Auth Context

Wrap your app with `AuthProvider` in `App.jsx`:

```jsx
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      {/* Your app components */}
    </AuthProvider>
  );
}
```

Then use the context in any component:

```jsx
import { useAuthContext } from '../contexts/AuthContext';

function ProtectedComponent() {
  const { isAuthenticated, user, logout } = useAuthContext();
  
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }
  
  return (
    <div>
      Welcome, {user?.username}!
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```
