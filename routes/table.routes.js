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

router.post("/e_shopify",
  [authJwt.verifyToken],
  controller.insert_e_shopify
);

router.post("/la_nh_product",
  [authJwt.verifyToken],
  controller.insert_la_nh_product
);

router.post("/thd_product",
  [authJwt.verifyToken],
  controller.insert_thd_product
);

router.post("/tm_product",
  [authJwt.verifyToken],
  controller.insert_tm_product
);

router.post("/tm_shopify",
  [authJwt.verifyToken],
  controller.insert_tm_shopify
);

// PUT REQUESTS
router.put("/e_product/update/:id",
    [authJwt.verifyToken],
    controller.update_e_product
);

router.put("/e_shopify/update/:id",
  [authJwt.verifyToken],
  controller.update_e_shopify
);

router.put("/la_nh_product/update/:id",
  [authJwt.verifyToken],
  controller.update_la_nh_product
);

router.put("/thd_product/update/:id",
  [authJwt.verifyToken],
  controller.update_thd_product
);

router.put("/tm_product/update/:id",
  [authJwt.verifyToken],
  controller.update_tm_product
);

router.put("/tm_shopify/update/:id",
  [authJwt.verifyToken],
  controller.update_tm_shopify
);

// DELETE REQUESTS

router.delete("/e_product/delete/:id",
    [authJwt.verifyToken],
    controller.delete_e_product
);

router.delete("/e_shopify/delete/:id",
  [authJwt.verifyToken],
  controller.delete_e_shopify
);

router.delete("/la_nh_product/delete/:id",
  [authJwt.verifyToken],
  controller.delete_la_nh_product
);

router.delete("/thd_product/delete/:id",
  [authJwt.verifyToken],
  controller.delete_thd_product
);

router.delete("/tm_product/delete/:id",
  [authJwt.verifyToken],
  controller.delete_tm_product
);

router.delete("/tm_shopify/delete/:id",
  [authJwt.verifyToken],
  controller.delete_tm_shopify
);
module.exports = router;