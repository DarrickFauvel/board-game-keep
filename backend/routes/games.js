const express = require("express")
const {
  createGame,
  getGames,
  getGame,
} = require("../controllers/gameController")
const router = express.Router()

const resourceName = "game"

router.get("/", getGames)

router.get("/:id", getGame)

router.post("/", createGame)

router.delete("/:id", (req, res) => {
  res.json({
    message: `${req.method} ${resourceName} for id=${req.params.id}`,
  })
})

router.patch("/:id", (req, res) => {
  res.json({
    message: `${req.method} ${resourceName} for id=${req.params.id}`,
  })
})

module.exports = router
