const express = require("express");
const router = express.Router();
const User = require("../models/User_Customer");

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    res.json({data:users,success:true});
  } catch (error) {
    res.status(500).json({ error: error.message,success:false });
  }
});

// Get a single user by ID
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id).exec();
    if (!user) {
      res.status(500).json({ error: "User not found",success:false });
    } else {
    res.json({data:user,success:true});
    }
  } catch (error) {
      res.status(500).json({ error: error.message,success:false });
  }
});


module.exports = router;
