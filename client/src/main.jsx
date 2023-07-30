import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import AddScore from "./pages/AddScore.jsx"
import "./index.css"
import EditScore from "./pages/EditScore.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/add",
    element: <AddScore />,
  },
  {
    path: "/edit",
    element: <EditScore />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
