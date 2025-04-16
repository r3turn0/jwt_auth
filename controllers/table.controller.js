const db = require("../models");
const Elittile = db.elittile;
const Op = db.Sequelize.Op;

exports.eproducts = (req, res) => {
   const eproducts = Elittile.findAll();
   res.json({'data': eproducts});
   console.log('data:', eproducts);
};