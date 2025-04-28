// Import route modules for authentication, tables, and user-related routes
const auth = require('./auth.routes'); // Handles authentication-related routes
const tables = require('./table.routes'); // Handles table-related routes
const user = require('./user.routes'); // Handles user-related routes

// Export a function that registers routes and middleware for the app
module.exports = function(app) {
  // Middleware to set HTTP headers for CORS (Cross-Origin Resource Sharing)
  app.use(function(req, res, next) {
        // Allow specific headers in client requests
        res.header(
          "Access-Control-Allow-Headers", // Header name
          "x-access-token, Origin, Content-Type, Accept" // Allowed header values
        );
        next(); // Pass control to the next middleware or route handler
    });
  // Register API routes with their respective base paths
  app.use("/api/auth/", auth); // Routes for authentication (e.g., login, signup)
  app.use("/api/tables/", tables); // Routes for table-related operations
  //app.use("/api/users/", user); // Routes for user-related operations
};