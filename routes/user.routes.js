// Authorization
const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");
const router = require("express").Router();

// router.get(
//   "/user",
//   [authJwt.verifyToken],
//   controller.userBoard
// );

// router.get(
//   "/mod",
//   [authJwt.verifyToken, authJwt.isModerator],
//   controller.moderatorBoard
// );

// router.get(
//   "/admin",
//   [authJwt.verifyToken, authJwt.isAdmin],
//   controller.adminBoard
// );

module.exports = router;
