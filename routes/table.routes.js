const { authJwt } = require("../middleware");
const controller = require("../controllers/table.controller");
const router = require("express").Router();

// router.get("/e_product", 
//   [authJwt.verifyToken], 
//   controller.e_product
// );
  
module.exports = router;