const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      require: [true, "First name is required"],
      trim: true,
      text: true,
    },
    last_name: {
      type: String,
      require: [true, "Last name is required"],
      trim: true,
      text: true,
    },
    username: {
      type: String,
      require: [true, "Username is required"],
      trim: true,
      text: true,
      unique: true,
    },
    email: {
      type: String,
      require: [true, "Email is required"],
      trim: true,
    },
    password: {
      type: String,
      require: [true, "Password is required"],
      trim: true,
    },
    picture: {
      type: String,
      trim: true,
      default:
        "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png",
    },
    cover: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      require: [true, "Gender is required"],
      trim: true,
    },
    bYear: {
      type: Number,
      required: true,
      trim: true,
    },
    bMonth: {
      type: Number,
      required: true,
      trim: true,
    },
    bDay: {
      type: Number,
      required: true,
      trim: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    friends: [
      {
        type: ObjectId,
        ref: "User",
      },
    ],
    following: [
      {
        type: ObjectId,
        ref: "User",
      },
    ],
    followers: [
      {
        type: ObjectId,
        ref: "User",
      },
    ],
    requests: [
      {
        type: ObjectId,
        ref: "User",
      },
    ],
    search: [
      {
        user: {
          type: ObjectId,
          ref: "User",
        },
      },
    ],
    details: {
      bio: {
        type: String,
      },
      otherName: {
        type: String,
      },
      job: {
        type: String,
      },
      workplace: {
        type: String,
      },
      highSchool: {
        type: String,
      },
      collage: {
        type: String,
      },
      currentCity: {
        type: String,
      },
      hometown: {
        type: String,
      },
      realtionship: {
        type: String,
        enum: ["Single", "In a relationship", "Married", "Divorced"],
      },
    },
    savedPosts: [
      {
        post: {
          type: ObjectId,
          ref: "Post",
        },
        savedAt: {
          type: Date,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
