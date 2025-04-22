require('dotenv').config();

// This secret is used to create the JWT Token
module.exports = {
    secret: process.env.SECRET
  };
