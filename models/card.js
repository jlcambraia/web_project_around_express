const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlenght: 30,
    },
    link: {
      type: String,
      required: true,
      validate: {
        validator: (v) => {
          return /(http:\/\/|https:\/\/)(www\.)?(.+)(\/)?(#)?/gi.test(v);
        },
      },
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    likes: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "user",
      default: [],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("card", cardSchema);
