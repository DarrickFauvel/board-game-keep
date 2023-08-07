import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { GamesContextProvider } from "./context/GameContext.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GamesContextProvider>
      <App />
    </GamesContextProvider>
  </React.StrictMode>
)
