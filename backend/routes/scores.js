const express = require("express")

const router = express.Router()

router
  .get("/", (req, res) => {
    res.send({
      message: "GET all scores",
    })
  })

  .get("/:id", (req, res) => {
    res.send({
      message: "GET a single score",
    })
  })

  .post("/", (req, res) => {
    res.send({
      message: "POST a single score",
    })
  })

  .delete("/:id", (req, res) => {
    res.send({
      message: "DELETE a single score",
    })
  })

  .patch("/:id", (req, res) => {
    res.send({
      message: "UPDATE a single score",
    })
  })

module.exports = router
