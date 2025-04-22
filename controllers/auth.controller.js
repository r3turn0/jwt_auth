const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

// Sign up function to create users for the API
exports.signup = (req, res) => {
  // Create a new user in the database using the data provided in the request body
  User.create({
    username: req.body.username, // Set the username from the request body
    email: req.body.email,       // Set the email from the request body
    password: bcrypt.hashSync(req.body.password, 8) // Hash the password before storing it
  })
    .then(user => {
      // Check if roles are provided in the request body
      if (req.body.roles) {
        // Find all roles in the database that match the provided role names
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles // Match any of the roles provided in the request
            }
          }
        }).then(roles => {
          // Associate the found roles with the newly created user
          user.setRoles(roles).then(() => {
            // Send a success response to the client
            res.status(200).send({ message: "User was registered successfully!" });
          });
        });
      } else {
        // If no roles are provided, assign the default role (e.g., role ID 1)
        user.setRoles([1]).then(() => {
          // Send a success response to the client
          res.status(200).send({ message: "User was registered successfully!" });
        });
      }
    })
    .catch(err => {
      // Handle any errors that occur during user creation or role assignment
      res.status(500).send({ message: err.message });
    });
};

// Exporting the `signin` function to handle user login requests
exports.signin = (req, res) => {
  // Find a user in the database where the username matches the one provided in the request body
  User.findOne({
    where: {
      username: req.body.username // Extracting the username from the request body
    }
  })
    .then(user => {
      // If no user is found, return a 404 status with an error message
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      // Compare the provided password with the hashed password stored in the database
      var passwordIsValid = bcrypt.compareSync(
        req.body.password, // Password from the request body
        user.password // Hashed password from the database
      );

      // If the password is invalid, return a 401 status with an error message
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null, // No token is provided since authentication failed
          message: "Invalid Password!"
        });
      }

      // Generate a JSON Web Token (JWT) for the authenticated user
      const token = jwt.sign(
        { id: user.id }, // Payload containing the user's ID
        config.secret, // Secret key for signing the token
        {
          algorithm: 'HS256', // Algorithm used for signing the token
          allowInsecureKeySizes: true, // Allow insecure key sizes (not recommended for production)
          expiresIn: 86400, // Token expiration time (24 hours in seconds)
        }
      );

      // Initialize an array to store the user's roles
      var authorities = [];
      // Retrieve the roles associated with the user
      user.getRoles().then(roles => {
        // Loop through the roles and format them as "ROLE_<ROLE_NAME>"
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        // Log the roles for debugging purposes
        console.log('Roles found for user: ', user, authorities);
        // Send a successful response with user details and the generated token
        res.status(200).send({
          id: user.id, // User ID
          username: user.username, // Username
          email: user.email, // Email
          roles: authorities, // Array of roles
          accessToken: token // JWT token
        });
      });
    })
    .catch(err => {
      // Handle any errors that occur during the process and return a 500 status
      res.status(500).send({ message: err.message });
    });
};