const express = require("express")

const router = express.Router()

router
  .get("/", (req, res) => {
    res.send({
      message: "GET all games",
    })
  })

  .get("/:id", (req, res) => {
    res.send({
      message: "GET a single game",
    })
  })

  .post("/", (req, res) => {
    res.send({
      message: "POST a single game",
    })
  })

  .delete("/:id", (req, res) => {
    res.send({
      message: "DELETE a single game",
    })
  })

  .patch("/:id", (req, res) => {
    res.send({
      message: "UPDATE a single game",
    })
  })

module.exports = router
