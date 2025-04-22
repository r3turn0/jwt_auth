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
      schema: process.env.SCHEMA,
      timestamps: false, // Disables Sequelize's createdAt and updatedAt fields
      freezeTableName: true // Ensures Sequelize won't pluralize the table name
    }
  );
    return User;
  }; 