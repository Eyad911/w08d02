const express = require("express");
const {
    Register,
   
  } = require("./../controllers/user");
const userRouter =express.Router();
userRouter.post("/signUp", Register);

module.exports = userRouter;