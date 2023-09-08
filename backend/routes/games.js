const express = require("express");

const {
  createGame,
  getGames,
  getGame,
  deleteGame,
  updateGame,
} = require("../controllers/gameController");

const router = express.Router();

const resourceName = "game";

router.get("/", getGames);

router.get("/:id", getGame);

router.post("/", createGame);

router.delete("/:id", deleteGame);

router.patch("/:id", updateGame);

module.exports = router;
