const db = require("../models"); // Import the database models
const ROLES = db.ROLES; // Retrieve the list of valid roles from the database
const User = db.user; // Retrieve the User model from the database

// Middleware function to check for duplicate username or email
checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Check if the username already exists in the database
  User.findOne({
    where: {
      username: req.body.username // Search for a user with the provided username
    }
  }).then(user => {
    if (user) {
      // If a user with the same username is found, send a 400 error response
      res.status(400).send({
        message: "Failed! Username is already in use!"
      });
      return; // Stop further execution
    }
    // If no duplicate username is found, check for duplicate email
    User.findOne({
      where: {
        email: req.body.email // Search for a user with the provided email
      }
    }).then(user => {
      if (user) {
        // If a user with the same email is found, send a 400 error response
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        return; // Stop further execution
      }
      // If no duplicates are found, proceed to the next middleware
      next();
    });
  });
};

// Middleware function to check if the provided roles exist
checkRolesExisted = (req, res, next) => {
  if (req.body.roles) { // Check if roles are provided in the request body
    for (let i = 0; i < req.body.roles.length; i++) {
      // Check if the role is not in the list of valid roles
      if (!ROLES.includes(req.body.roles[i])) {
        // If an invalid role is found, send a 400 error response
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i]
        });
        return; // Stop further execution
      }
    }
  }
  // If all roles are valid, proceed to the next middleware
  next();
};

// Export the middleware functions as part of the `verifySignUp` object
const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp; // Make the `verifySignUp` object available for import in other files