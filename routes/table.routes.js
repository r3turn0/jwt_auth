const { authJwt } = require("../middleware");
const controller = require("../controllers/table.controller");
const router = require("express").Router();

// GET REQUESTS
router.get("/e_product", 
  [authJwt.verifyToken], 
  controller.e_product
);

router.get("/e_shopify", 
  [authJwt.verifyToken], 
  controller.e_shopify
);

router.get("/la_nh_product", 
  [authJwt.verifyToken], 
  controller.la_nh_product
);

router.get("/thd_product", 
  [authJwt.verifyToken], 
  controller.thd_product
);

router.get("/tm_product", 
  [authJwt.verifyToken], 
  controller.tm_product
);

router.get("/tm_shopify", 
  [authJwt.verifyToken], 
  controller.tm_shopify
);

// POST REQUESTS
router.post("/e_product",
    [authJwt.verifyToken],
    controller.insert_e_product
);

// router.put("/e_product/update/:id",
//     [authJwt.verifyToken],
//     controller.update_e_product_by_id
// );
  
module.exports = router;