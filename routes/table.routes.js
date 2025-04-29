const { authJwt } = require("../middleware");
const controller = require("../controllers/table.controller");
const router = require("express").Router();
//const Sequelize = require("sequelize");
const { sequelize } = require("../models");


// GET REQUESTS
router.get("/e_product", 
  [authJwt.verifyToken],
  async function(req, res) {
    const t = await sequelize.transaction();
    try {
      await controller.e_product(req, res, t)
    }
    catch (error) {
      console.error("Error in transaction:", error);
      await t.rollback(); // Rollback the transaction on error
    } finally {
      await t.commit(); // Commit the transaction if everything is fine
    }
  } 
);

router.get("/e_shopify", 
  [authJwt.verifyToken],
  async function(res, req) {
    const t = await sequelize.transaction();
    try {
      await controller.e_shopify(req, res, t)
    }
    catch (error) {
      console.error("Error in transaction:", error);
      await t.rollback(); // Rollback the transaction on error
    } finally {
      await t.commit(); // Commit the transaction if everything is fine
    }
  } 
);

router.get("/la_nh_product", 
  [authJwt.verifyToken],
  async function(res, req) {
    const t = await sequelize.transaction();
    try {
      await controller.la_nh_product(req, res, t)
    }
    catch (error) {
      console.error("Error in transaction:", error);
      await t.rollback(); // Rollback the transaction on error
    } finally {
      await t.commit(); // Commit the transaction if everything is fine
    }
  } 
);

router.get("/thd_product", 
  [authJwt.verifyToken], 
  async function(res, req) {
    const t = await sequelize.transaction();
    try {
      await controller.thd_product(req, res, t)
    }
    catch (error) {
      console.error("Error in transaction:", error);
      await t.rollback(); // Rollback the transaction on error
    } finally {
      await t.commit(); // Commit the transaction if everything is fine
    }
  }
);

router.get("/tm_product", 
  [authJwt.verifyToken],
  async function(res, req) {
    const t = await sequelize.transaction();
    try {
      await controller.tm_product(req, res, t)
    }
    catch (error) {
      console.error("Error in transaction:", error);
      await t.rollback(); // Rollback the transaction on error
    } finally {
      await t.commit(); // Commit the transaction if everything is fine
    }
  } 
);

router.get("/tm_shopify", 
  [authJwt.verifyToken],
  async function(res, req) {
    const t = await sequelize.transaction();
    try {
      await controller.tm_shopify(req, res, t)
    }
    catch (error) {
      console.error("Error in transaction:", error);
      await t.rollback(); // Rollback the transaction on error
    } finally {
      await t.commit(); // Commit the transaction if everything is fine
    }
  } 
);

// POST REQUESTS
router.post("/e_product",
    [authJwt.verifyToken],
    async function(req, res) {
      const t = await sequelize.transaction();
      try {
        await controller.insert_e_product(req, res, t)
      }
      catch (error) {
        console.error("Error in transaction:", error);
        await t.rollback(); // Rollback the transaction on error
      } finally {
        await t.commit(); // Commit the transaction if everything is fine
      }
    }
);

router.post("/e_shopify",
  [authJwt.verifyToken],
  async function(req, res) {
    const t = await sequelize.transaction();
    try {
      await controller.insert_e_shopify(req, res, t)
    }
    catch (error) {
      console.error("Error in transaction:", error);
      await t.rollback(); // Rollback the transaction on error
    } finally {
      await t.commit(); // Commit the transaction if everything is fine
    }
  }
);

router.post("/la_nh_product",
  [authJwt.verifyToken],
  async function(req, res) {
    const t = await sequelize.transaction();
    try {
      await controller.insert_la_nh_product(req, res, t)
    }
    catch (error) {
      console.error("Error in transaction:", error);
      await t.rollback(); // Rollback the transaction on error
    } finally {
      await t.commit(); // Commit the transaction if everything is fine
    }
  }
);

router.post("/thd_product",
  [authJwt.verifyToken],
  async function(req, res) {
    const t = await sequelize.transaction();
    try {
      await controller.insert_thd_product(req, res, t)
    }
    catch (error) {
      console.error("Error in transaction:", error);
      await t.rollback(); // Rollback the transaction on error
    } finally {
      await t.commit(); // Commit the transaction if everything is fine
    }
  }
);

router.post("/tm_product",
  [authJwt.verifyToken],
  async function(req, res) {
    const t = await sequelize.transaction();
    try {
      await controller.insert_tm_product(req, res, t)
    }
    catch (error) {
      console.error("Error in transaction:", error);
      await t.rollback(); // Rollback the transaction on error
    } finally {
      await t.commit(); // Commit the transaction if everything is fine
    }
  }
);

router.post("/tm_shopify",
  [authJwt.verifyToken],
  async function(req, res) {
    const t = await sequelize.transaction();
    try {
      await controller.insert_tm_shopify(req, res, t)
    }
    catch (error) {
      console.error("Error in transaction:", error);
      await t.rollback(); // Rollback the transaction on error
    } finally {
      await t.commit(); // Commit the transaction if everything is fine
    }
  }
);

// PUT REQUESTS
router.put("/e_product/update/:id",
    [authJwt.verifyToken],
    async function(req, res) {
      const t = await sequelize.transaction();
      try {
        await controller.update_e_product(req, res, t)
      }
      catch (error) {
        console.error("Error in transaction:", error);
        await t.rollback(); // Rollback the transaction on error
      } finally {
        await t.commit(); // Commit the transaction if everything is fine
      }
    }
);

router.put("/e_shopify/update/:id",
  [authJwt.verifyToken],
  async function(req, res) {
    const t = await sequelize.transaction();
    try {
      await controller.update_e_shopify(req, res, t)
    }
    catch (error) {
      console.error("Error in transaction:", error);
      await t.rollback(); // Rollback the transaction on error
    } finally {
      await t.commit(); // Commit the transaction if everything is fine
    }
  }
);

router.put("/la_nh_product/update/:id",
  [authJwt.verifyToken],
  async function(req, res) {
    const t = await sequelize.transaction();
    try {
      await controller.update_la_nh_product(req, res, t)
    }
    catch (error) {
      console.error("Error in transaction:", error);
      await t.rollback(); // Rollback the transaction on error
    } finally {
      await t.commit(); // Commit the transaction if everything is fine
    }
  }
);

router.put("/thd_product/update/:id",
  [authJwt.verifyToken],
  async function(req, res) {
    const t = await sequelize.transaction();
    try {
      await controller.update_thd_product(req, res, t)
    }
    catch (error) {
      console.error("Error in transaction:", error);
      await t.rollback(); // Rollback the transaction on error
    } finally {
      await t.commit(); // Commit the transaction if everything is fine
    }
  }
);

router.put("/tm_product/update/:id",
  [authJwt.verifyToken],
  async function(req, res) {
    const t = await sequelize.transaction();
    try {
      await controller.update_tm_product(req, res, t)
    }
    catch (error) {
      console.error("Error in transaction:", error);
      await t.rollback(); // Rollback the transaction on error
    } finally {
      await t.commit(); // Commit the transaction if everything is fine
    }
  }
);

router.put("/tm_shopify/update/:id",
  [authJwt.verifyToken],
  async function(req, res) {
    const t = await sequelize.transaction();
    try {
      await controller.update_tm_shopify(req, res, t)
    }
    catch (error) {
      console.error("Error in transaction:", error);
      await t.rollback(); // Rollback the transaction on error
    } finally {
      await t.commit(); // Commit the transaction if everything is fine
    }
  }
);

// DELETE REQUESTS

router.delete("/e_product/delete/:id",
    [authJwt.verifyToken],
    async function(req, res) {
      const t = await sequelize.transaction();
      try {
        await controller.delete_e_product(req, res, t)
      }
      catch (error) {
        console.error("Error in transaction:", error);
        await t.rollback(); // Rollback the transaction on error
      } finally {
        await t.commit(); // Commit the transaction if everything is fine
      }
    }
);

router.delete("/e_shopify/delete/:id",
  [authJwt.verifyToken],
  async function(req, res) {
    const t = await sequelize.transaction();
    try {
      await controller.delete_e_shopify(req, res, t)
    }
    catch (error) {
      console.error("Error in transaction:", error);
      await t.rollback(); // Rollback the transaction on error
    } finally {
      await t.commit(); // Commit the transaction if everything is fine
    }
  }
);

router.delete("/la_nh_product/delete/:id",
  [authJwt.verifyToken],
  async function(req, res) {
    const t = await sequelize.transaction();
    try {
      await controller.delete_la_nh_product(req, res, t)
    }
    catch (error) {
      console.error("Error in transaction:", error);
      await t.rollback(); // Rollback the transaction on error
    } finally {
      await t.commit(); // Commit the transaction if everything is fine
    }
  }
);

router.delete("/thd_product/delete/:id",
  [authJwt.verifyToken],
  async function(req, res) {
    const t = await sequelize.transaction();
    try {
      await controller.delete_thd_product(req, res, t)
    }
    catch (error) {
      console.error("Error in transaction:", error);
      await t.rollback(); // Rollback the transaction on error
    } finally {
      await t.commit(); // Commit the transaction if everything is fine
    }
  }
);

router.delete("/tm_product/delete/:id",
  [authJwt.verifyToken],
  async function(req, res) {
    const t = await sequelize.transaction();
    try {
      await controller.delete_tm_product(req, res, t)
    }
    catch (error) {
      console.error("Error in transaction:", error);
      await t.rollback(); // Rollback the transaction on error
    } finally {
      await t.commit(); // Commit the transaction if everything is fine
    }
  }
);

router.delete("/tm_shopify/delete/:id",
  [authJwt.verifyToken],
  async function(req, res) {
    const t = await sequelize.transaction();
    try {
      await controller. (req, res, t)
    }
    catch (error) {
      console.error("Error in transaction:", error);
      await t.rollback(); // Rollback the transaction on error
    } finally {
      await t.commit(); // Commit the transaction if everything is fine
    }
  }
);


module.exports = router;