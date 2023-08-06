const express = require("express")
const router = express.Router()

const resourceName = "score"

router
  .get("/", (req, res) => {
    res.json({
      message: `${req.method} all ${resourceName}s`,
    })
  })

  .get("/:id", (req, res) => {
    res.json({
      message: `${req.method} ${resourceName} for id=${req.params.id}`,
    })
  })

  .post("/", (req, res) => {
    res.json({
      message: `${req.method} new ${resourceName}`,
    })
  })

  .delete("/:id", (req, res) => {
    res.json({
      message: `${req.method} ${resourceName} for id=${req.params.id}`,
    })
  })

  .patch("/:id", (req, res) => {
    res.json({
      message: `${req.method} ${resourceName} for id=${req.params.id}`,
    })
  })

module.exports = router
