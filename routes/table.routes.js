const { authJwt } = require("../middleware");
const controller = require("../controllers/table.controller");
const router = require("express").Router();

router.get("/e_product", 
  [authJwt.verifyToken], 
  controller.e_product
);

router.post("/e_product",
    [authJwt.verifyToken],
    controller.insert_e_product
);

// router.put("/e_product/update/:id",
//     [authJwt.verifyToken],
//     controller.update_e_product_by_id
// );
  
module.exports = router;