require('dotenv').config();
// module.exports = {
//     HOST: "localhost",
//     USER: "DUser",
//     PASSWORD: "eLiteTileP@55w1rd!",
//     DB: "ETCDP",
//     dialect: "postgres",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
//   };

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
    logging: console.log
  };