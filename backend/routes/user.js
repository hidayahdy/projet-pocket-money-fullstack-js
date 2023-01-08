const express = require("express");
const { Register, Login, Getusers, Deleteuser, Updateuser, UserProfile} = require("../controlles/user");
const { IsAuth } = require("../middlewear/isAuth");
const {
  registervalidation,
  Validation,
  loginvalidation,
} = require("../middlewear/validation");

const userRoutes = express.Router();

userRoutes.post("/register", registervalidation, Validation, Register);
userRoutes.post("/login", loginvalidation, Validation, Login);
userRoutes.put("/edit/:id",Updateuser);
userRoutes.get("/userprofile",IsAuth,UserProfile);
userRoutes.delete("/delete/:id",Deleteuser);

userRoutes.get("/current", IsAuth, (req, res) => {
  res.send({ user: req.user });
});
userRoutes.get("/all", Getusers);

module.exports = userRoutes;
