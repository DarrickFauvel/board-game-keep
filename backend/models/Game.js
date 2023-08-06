import mongoose, { Schema } from "mongoose"

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
    notes: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
)

export default mongoose.model("Game", gameSchema)
