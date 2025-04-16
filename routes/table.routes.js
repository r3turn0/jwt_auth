const { authJwt } = require("../middleware");
const controller = require("../controllers/table.controller");
const router = require("express").Router();

router.get("/elittile", 
  [authJwt.verifyToken], 
  controller.eproducts
);
  
module.exports = router;