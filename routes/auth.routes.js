// Authentication
const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
const router = require("express").Router();

// Test route to verify authentication endpoint
router.get("/authenticate", (req, res) => {
  res.json({"message": '/authenticate success'});
});

// Route for user signup with middleware checks
router.post(
  "/signup",
  [
  verifySignUp.checkDuplicateUsernameOrEmail, // Check if username or email already exists
  verifySignUp.checkRolesExisted // Validate roles provided in the request
  ],
  controller.signup // Call the signup controller
);

// Route for user signin
router.post("/signin", controller.signin); // Call the signin controller

// Export the router to be used in other parts of the application
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