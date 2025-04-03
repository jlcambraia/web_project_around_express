const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlenght: 30,
    },
    about: {
      type: String,
      required: true,
      minlength: 2,
      maxlenght: 30,
    },
    avatar: {
      type: String,
      required: true,
      validate: {
        validator: (v) => {
          return /(http:\/\/|https:\/\/)(www\.)?(.+)(\/)?(#)?/gi.test(v);
        },
      },
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("user", userSchema);
