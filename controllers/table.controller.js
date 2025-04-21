const db = require("../models");
const Elittile = db.elittile;
const Op = db.Sequelize.Op;

exports.eProduct = async (req, res) => {
   try {
      const e_product = await Elittile.findAll();
      res.status(200).json({'data': e_product});
      console.log('data:', e_product);
   } catch (error) {
      console.log("Error fetching products:", error.message);
      res.status(500).json({message: "An error has occured while fetching products"});
   }
   
};