const mongoose = require("mongoose")
const Game = require("../models/gameModel")

// Get all games
const getGames = async (req, res) => {
  const games = await Game.find({}).sort({ createdAt: -1 })
  res.status(200).json(games)
}

// Get a game
const getGame = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such game." })
  }

  const game = await Game.findById(id)

  if (!game) {
    return res.status(400).json({ error: "No such game found." })
  }

  res.status(200).json(game)
}

// Create a game
const createGame = async (req, res) => {
  const { title, description, image, note } = req.body

  let emptyFields = []

  if (!title) {
    emptyFields.push("title")
  }
  if (!description) {
    emptyFields.push("description")
  }
  if (!image) {
    emptyFields.push("image")
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields.", emptyFields })
  }

  try {
    const game = await Game.create({ title, description, image, note })
    res.status(200).json(game)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// Delete a game
const deleteGame = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such game." })
  }

  const game = await Game.findOneAndDelete({ _id: id })

  if (!game) {
    return res.status(400).json({ error: "No such game found." })
  }

  res.status(200).json(game)
}

// Update a game
const updateGame = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such game." })
  }

  const game = await Game.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  )

  if (!game) {
    return res.status(400).json({ error: "No such game found." })
  }

  res.status(200).json(game)
}

module.exports = { getGames, getGame, createGame, deleteGame, updateGame }
