const express = require("express");
const router = express.Router();
const Insight = require("../models/Insights_model");
const User = require("../models/User_Customer");

// Route to add a new insight
router.post("/", async (req, res) => {
  try {
    const payload = req.body;

    const newInsight = new Insight(payload);
    const savedInsight = await newInsight.save();

    const updateUser = await User.findOneAndUpdate(
      { _id: savedInsight.author },
      { $push: { insights: savedInsight._id } },
      { new: true, select: "firstName email insights" }
    );

    res
      .status(201)
      .json({ data: savedInsight, success: true, userInfo: updateUser });
  } catch (error) {
    res.status(400).json({ data: error.message, success: false });
  }
});

// Route to get all insights
router.get("/", async (req, res) => {
  try {
    const insights = await Insight.find().sort({ createdAt: -1 });
    res.json({ data: insights, success: true });
  } catch (error) {
    res.status(500).json({ data: error.message, success: false });
  }
});

router.get("/counts", async (req, res) => {
  try {
    // Get all unique categories
    const categories = await Insight.distinct("insightCategory");

    // Create an object to store the counts for each category
    const categoryCounts = {};

    // Loop through each category and count the number of documents
    for (const category of categories) {
      const count = await Insight.countDocuments({ insightCategory: category });
      categoryCounts[category] = count;
    }
    const insights = await Insight.find().sort({ createdAt: -1 }).lean();

    res
      .status(200)
      .json({ data: insights, counts: categoryCounts, success: true });
  } catch (error) {
    res.status(500).json({ data: error.message, success: false });
  }
});

router.get("/categories", async (req, res) => {
  try {
    // Get all unique categories
    const categories = await Insight.distinct("insightCategory");

    // Create an object to store the counts for each category
    const categoryCounts = {};

    // Loop through each category and count the number of documents
    for (const category of categories) {
      const count = await Insight.countDocuments({ insightCategory: category });
      categoryCounts[category] = count;
    }
    res.json({ data: categoryCounts, success: true });
  } catch (error) {
    res.status(500).json({ data: error.message, success: false });
  }
});

router.get("/category:insightCategory", async (req, res) => {
  const id = req.params.insightCategory;
  try {
    const insights = await Insight.find({ insightCategory: id });
    res.json({ data: insights, success: true });
  } catch (error) {
    res.status(500).json({ data: error.message, success: false });
  }
});

module.exports = router;

// CREATE NEW
// {
//   "industrySegment": "Restaurant",
//   "insightCategory": "Marketing Strategy",
//   "insightSubCategory": "Social Media Campaigns",
//   "iconURL": "https://example.com/icon5.png",
//   "insightDataURL": "https://example.com/data5",
//   "insightLevel": "Advanced",
//   "insightTitle": "Maximizing Social Media Engagement",
//   "insightDescription": "Strategies to boost engagement on social media platforms.",
//   "insightActionItem": "Create interactive social media content.",
//   "actionItemExample": "Run polls and contests to engage followers.",
//   "author": "60f7d9a7b6b4f20015f7b2a5",
//   "totalBookmarks": 15,
//   "implementNumber": 6
// }
//
