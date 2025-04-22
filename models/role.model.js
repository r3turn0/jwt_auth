require('dotenv').config();

module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("roles", 
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true
        },
        name: {
          type: Sequelize.STRING
        }
      },
      {
        schema: process.env.SCHEMA,
        timestamps: false, // Disables Sequelize's createdAt and updatedAt fields
        freezeTableName: true // Ensures Sequelize won't pluralize the table name
      }
    );
    return Role;
  };
  