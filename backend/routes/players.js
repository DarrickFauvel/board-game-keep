const express = require("express")

const router = express.Router()

router
  .get("/", (req, res) => {
    res.send({
      message: "GET all players",
    })
  })

  .get("/:id", (req, res) => {
    res.send({
      message: "GET a single player",
    })
  })

  .post("/", (req, res) => {
    res.send({
      message: "POST a single player",
    })
  })

  .delete("/:id", (req, res) => {
    res.send({
      message: "DELETE a single player",
    })
  })

  .patch("/:id", (req, res) => {
    res.send({
      message: "UPDATE a single player",
    })
  })

module.exports = router
