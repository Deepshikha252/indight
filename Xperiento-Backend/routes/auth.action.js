const express = require("express");
const router = express.Router();
const User = require("../models/User_Customer"); // Import the User model
const jwt = require("jsonwebtoken");
const { encodeKey, cookiesKey } = require("../utils/token"); // Import your secret key and cookies key

router.post("/login", async (req, res) => {
  const { id, password } = req.body;
  try {
    const user = await User.findOne({
      $or: [{ email: id }, { phoneNumber: id }],
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        data: `User not found with these creadentials password :${password} id :${id} with Please sign up.`,
      });
    }

    if (user.password !== password) {
      return res.status(401).json({
        success: false,
        data: "Incorrect password. Please try again.",
      });
    }
    // Remove sensitive data before sending user object
    delete user.password;

    const token = jwt.sign({ user }, encodeKey, {
      expiresIn: "5d",
    });

    res.json({ success: true, data: user, token });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, data: "An error occurred: " + error.message });
  }
});


router.post("/createAccount", async (req, res) => {
  const payload = req.body;
  try {

     const createAccount = new User(payload);
    const user = await createAccount.save();

    delete user.password;

    const token = jwt.sign({ user }, encodeKey, {
      expiresIn: "5d",
    });

    res.json({ success: true, data: user, token });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, data: "An error occurred: " + error.message });
  }
});

module.exports = router;
