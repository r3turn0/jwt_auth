require('dotenv').config();

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    },
    {
      schema: process.env.SCHEMA
    }
  );
    return User;
  }; 