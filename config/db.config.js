require('dotenv').config();

// The database configuration
  module.exports = {
    HOST: process.env.PGSERVER,
    USER: process.env.NETSUITE_USER,
    PASSWORD: process.env.NETSUITE_PASSWORD,
    DB: process.env.DB,
    SCHEMA: process.env.SCHEMA,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    define: {
      hasPrimaryKey: false, // Disables Sequelize's primary key generation
      noPrimaryKey: true, // Disables Sequelize's primary key generation
    },
    logging: console.log
  };