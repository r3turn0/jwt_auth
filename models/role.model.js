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
        schema: process.env.SCHEMA
      }
    );
    return Role;
  };
  