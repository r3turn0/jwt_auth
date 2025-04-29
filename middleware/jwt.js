const jwt = require("jsonwebtoken"); // Import the jsonwebtoken library for handling JWTs.
const config = require("../config/auth.config.js"); // Import the configuration file containing the secret key for JWT.
const db = require("../models"); // Import the database models.
const User = db.user; // Access the User model from the database.

// Middleware to verify the JWT token.
verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"]; // Retrieve the token from the request headers.

  if (!token) { // If no token is provided, return a 403 Forbidden response.
    return res.status(403).send({
      message: "No token provided!"
    });
  }
  // Verify the token using the secret key from the config file.
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) { // If the token is invalid or expired, return a 401 Unauthorized response.
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    req.userId = decoded.id; // If valid, extract the user ID from the decoded token and attach it to the request object.
    next(); // Proceed to the next middleware or route handler.
  });
};

// Middleware to check if the user has an "admin" role.
isAdmin = (req, res, next) => {
  User.findByPk(req.userId) // Find the user in the database using the user ID from the request object.
    .then(user => {
      user.getRoles().then(roles => { // Retrieve the roles associated with the user.
        for (let i = 0; i < roles.length; i++) { // Loop through the roles.
          if (roles[i].name === "admin") { // If the user has the "admin" role, proceed to the next middleware.
            next();
            return;
          }
        }
        // If no "admin" role is found, return a 403 Forbidden response.
        res.status(403).send({
          message: "Require Admin Role!"
        });
        return;
      });
    });
};

// Middleware to check if the user has a "moderator" role.
isModerator = (req, res, next) => {
  User.findByPk(req.userId) // Find the user in the database using the user ID from the request object.
    .then(user => {
      user.getRoles().then(roles => { // Retrieve the roles associated with the user.
        for (let i = 0; i < roles.length; i++) { // Loop through the roles.
          if (roles[i].name === "moderator") { // If the user has the "moderator" role, proceed to the next middleware.
            next();
            return;
          }
        }

        // If no "moderator" role is found, return a 403 Forbidden response.
        res.status(403).send({
          message: "Require Moderator Role!"
        });
      });
    });
};

// Middleware to check if the user has either "moderator" or "admin" roles.
isModeratorOrAdmin = (req, res, next) => {
  User.findByPk(req.userId) // Find the user in the database using the user ID from the request object.
    .then(user => {
      user.getRoles().then(roles => { // Retrieve the roles associated with the user.
        for (let i = 0; i < roles.length; i++) { // Loop through the roles.
          if (roles[i].name === "moderator") { // If the user has the "moderator" role, proceed to the next middleware.
            next();
            return;
          }

          if (roles[i].name === "admin") { // If the user has the "admin" role, proceed to the next middleware.
            next();
            return;
          }
        }
        // If neither "moderator" nor "admin" roles are found, return a 403 Forbidden response.
        res.status(403).send({
          message: "Require Moderator or Admin Role!"
        });
      });
    });
};

// Export the authentication and authorization middleware functions as an object.
const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isModerator: isModerator,
  isModeratorOrAdmin: isModeratorOrAdmin
};

module.exports = authJwt; // Make the object available for import in other files.