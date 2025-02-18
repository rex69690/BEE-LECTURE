// Required modules
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const express = require('express');
const app = express();
const port = 3300;

// Initialize dotenv to load .env file
dotenv.config();

// Debugging: Log the SECRET_KEY to ensure it's being loaded correctly
console.log('SECRET_KEY:', process.env.SECRET_KEY);

// Authentication Middleware
const authenticate = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Extract token from header

  if (!token) {
    return res.status(401).json({
      status: "error",
      message: "No token provided"
    });
  }

  // Verify the token using the secret key from .env file
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        status: "error",
        message: "Token is invalid or expired"
      });
    }

    // Attach decoded user info to request object
    req.user = decoded;
    next();  // Move to the next middleware or route
  });
};

// Authorization Middleware (based on roles)
const authorize = (requiredRole) => {
  return (req, res, next) => {
    const userRole = req.user?.role;

    if (!userRole || userRole !== requiredRole) {
      return res.status(403).json({
        status: 'error',
        message: 'Forbidden: You do not have permission to access this resource',
      });
    }

    next();  // If role matches, allow access
  };
};

// Sample route to login and get a token
app.post('/login', (req, res) => {
  // Example user (you would get this from a DB or user input)
  const user = { id: 1, name: 'Lakshay', role: 'admin' };

  // Check if SECRET_KEY is undefined or empty
  if (!process.env.SECRET_KEY) {
    return res.status(500).json({
      status: 'error',
      message: 'Secret key not found in environment variables',
    });
  }

  // Generate JWT token with user details and expiration of 1 hour
  const token = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: '1h' });
  res.json({
    message: 'Login successful',
    token: token,
  });
});

// Protected route (authentication and authorization required)
app.get('/admin', authenticate, authorize('admin'), (req, res) => {
  res.json({
    message: 'Welcome to the admin dashboard',
    user: req.user,  // Access the authenticated user info
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
