const mongoose = require("mongoose");

const insightSchema = new mongoose.Schema(
  {
    industrySegment: {
      type: String,
    },
    insightCategory: {
      type: String,
      enum: ["Marketing", "Behaviour", "Price", "Complaint", "Sales"],
      default: "Marketing",
    },
    insightSubCategory: {
      type: String,
      // Promotional, Message Opportunity, Higher Ticket Sale
    },
    iconURL: {
      type: String,
    },
    insightDataURL: {
      type: String,
    },
    insightLevel: {
      type: String,
    },
    insightTitle: {
      type: String,
    },
    insightDescription: {
      type: String,
    },
    insightActionItem: {
      type: String,
    },
    actionItemExample: {
      type: String,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    likes: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      default: [],
    },
    dislikes: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      default: [],
    },
    comments: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Comment",
        },
      ],
      default: [],
    },
    totalBookmarks: {
      type: Number,
      default: 0,
    },
    implementNumber: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Insight = mongoose.model("Insight", insightSchema);

module.exports = Insight;
