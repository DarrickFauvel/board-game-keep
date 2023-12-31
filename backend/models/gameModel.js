const mongoose = require("mongoose")
const Schema = mongoose.Schema

const gameSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    note: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Game", gameSchema)
