require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

// Constants
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());
const logger = require("./middleware/logger");
app.use(logger);

// Routes
const scoreRoutes = require("./routes/scores");
const playerRoutes = require("./routes/players");
const gameRoutes = require("./routes/games");
app.use("/api/scores", scoreRoutes);
app.use("/api/players", playerRoutes);
app.use("/api/games", gameRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}...`);
    });
  })
  .catch((err) => console.log(err.message));
