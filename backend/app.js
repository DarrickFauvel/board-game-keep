require("dotenv").config()

const express = require("express")
const app = express()

// Middleware
const logger = require("./middleware/logger")
app.use(logger)

// Routes
const scoreRoutes = require("./routes/scores")
const playerRoutes = require("./routes/players")
const gameRoutes = require("./routes/games")
app.use("/api/scores", scoreRoutes)
app.use("/api/players", playerRoutes)
app.use("/api/games", gameRoutes)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}...`)
})
