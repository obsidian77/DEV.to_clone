// const express = require("express");
// const User = require("../model/User.model");
// const router = express.Router();

// router.get("/user", async (req, res, next) => {
//   try {
//     const result = await User.find();
//     res.send({
//       status: 200,
//       message: "OK",
//       data: result,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

// router.post("/user", async (req, res, next) => {
//   try {
//     const checkIfUserExists = await User.findOne({ email: req.body.email });
//     if (checkIfUserExists) {
//       res.send({
//         status: 404,
//         message: "Email Already Exists",
//       });
//     } else {
//       const resp = new User({
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         email: req.body.email,
//         phone: req.body.phone,
//         dob: req.body.dob,
//         gender: req.body.gender,
//         password: req.body.password,
//       });
//       const result = await resp.save();
//       res.send({
//         status: 200,
//         message: "User created successfully",
//         data: result,
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

// router.post("/login", async (req, res, next) => {
//   try {
//     const checkIfUserExists = await User.findOne({ email: req.body.email, password: req.body.password });
//     if (!checkIfUserExists) {
//       res.send({
//         status: 404,
//         message: "User does not exist",
//       });
//     } else {
//       res.send({
//         status: 200,
//         message: "Login Successful",
//         data: checkIfUserExists,
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

// module.exports = router;


const express = require("express");
const User = require("../model/user.model");
const router = express.Router();

router.get("/user", async (req, res, next) => {
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

router.post("/user", async (req, res, next) => {
  try {
    const { first_name, last_name, email, phone, dob, gender, password } = req.body;

    // Check if all required fields are present
    if (!first_name || !last_name || !email || !phone || !dob || !gender || !password) {
      return res.status(400).send({
        status: 400,
        message: "Missing required fields",
      });
    }

    const checkIfUserExists = await User.findOne({ email: email });
    if (checkIfUserExists) {
      return res.status(404).send({
        status: 404,
        message: "Email Already Exists",
      });
    }

    const newUser = new User({
      first_name,
      last_name,
      email,
      phone,
      dob,
      gender,
      password,
    });

    const result = await newUser.save();
    res.status(200).send({
      status: 200,
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 500,
      message: "Internal Server Error",
    });
  }
});

router.post("/user/login", async (req, res, next) => {
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