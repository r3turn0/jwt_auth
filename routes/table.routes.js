const { authJwt } = require("../middleware");
const controller = require("../controllers/table.controller");
const router = require("express").Router();

router.get("/elittile", 
  [authJwt.verifyToken], 
  controller.eProduct
);
  
module.exports = router;