// Aunthentication
const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
const router = require("express").Router();

// router.get("/authenticate", (req, res) => {
//     res.json({"message": '/authenticate success'});
// });



router.post(
  "/signup",
  [
    verifySignUp.checkDuplicateUsernameOrEmail,
    verifySignUp.checkRolesExisted
  ],
  controller.signup
);

router.post("/signin", controller.signin);

module.exports = router; 

// module.exports = function(app) {
  
//   router.post(
//     "/api/auth/signup",
//     [
//       verifySignUp.checkDuplicateUsernameOrEmail,
//       verifySignUp.checkRolesExisted
//     ],
//     controller.signup
//   );

//   router.post("/api/auth/signin", controller.signin);

//   app.use("/api/auth/", router);
// };