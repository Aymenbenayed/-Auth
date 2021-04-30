const express = require("express");
const router = express.Router();
const { Signup, SignIn } = require("../controllers/user");
const isAuth = require("../middlewares/auth_jwt");

const {
  registerValidation,
  signinValidation,
  validation,
} = require("../middlewares/user");

router.post("/signup", registerValidation(), validation, Signup);
router.post("/signin", signinValidation(), validation, SignIn);
router.get("/current", isAuth, (req, res) => {
  res.send(req.user);
});

module.exports = router;
