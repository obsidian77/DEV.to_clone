const express = require("express");
const User = require("../model/User.model");
const router = express.Router();

router.get("/get", async (req, res, next) => {
  try {
    const result = await User.find();
    res.send({
      status: 200,
      message: "OK",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/post", async (req, res, next) => {
  try {
    const checkIfUserExists = await User.findOne({ email: req.body.email });
    if (checkIfUserExists) {
      res.send({
        status: 404,
        message: "Email Already Exists",
      });
    } else {
      const resp = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
        dob: req.body.dob,
        gender: req.body.gender,
        password: req.body.password,
      });
      const result = await resp.save();
      res.send({
        status: 200,
        message: "User created successfully",
        data: result,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const checkIfUserExists = await User.findOne({ email: req.body.email, password: req.body.password });
    if (!checkIfUserExists) {
      res.send({
        status: 404,
        message: "User does not exist",
      });
    } else {
      res.send({
        status: 200,
        message: "Login Successful",
        data: checkIfUserExists,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
